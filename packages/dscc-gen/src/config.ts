import * as argparse from 'argparse';
import {Question} from 'inquirer';
import inquirer = require('inquirer');
import * as path from 'path';
import * as constants from './constants';
import {
  AuthType,
  CommonConfig,
  ConnectorConfig,
  ConnectorConfigHasDefaults,
  ProjectChoice,
  VizConfig,
  VizConfigHasDefaults,
} from './types';
import {assertNever} from './util';
import * as util from './util';
import {
  addBucketPrefix,
  checkGsutilInstalled,
  hasBucketPermissions,
} from './viz/validation';

const addVizParser = (
  subparser: argparse.SubParser
): argparse.ArgumentParser => {
  const vizParser = subparser.addParser(ProjectChoice.VIZ, {
    addHelp: true,
    description: 'Creates a project using a Community Viz template.',
  });

  vizParser.addArgument(['--devDirectory', '-d'], {
    dest: 'devBucket',
    help: 'The dev directory',
  });

  vizParser.addArgument(['--prodDirectory', '-p'], {
    dest: 'prodBucket',
    help: 'The prod directory',
  });

  vizParser.addArgument(['--ts', '--typescript'], {
    dest: 'ts',
    help: 'Use typescript for template.',
    action: 'storeTrue',
  });

  return vizParser;
};

const addConnectorParser = (
  subparser: argparse.SubParser
): argparse.ArgumentParser => {
  const connectorParser = subparser.addParser(ProjectChoice.CONNECTOR, {
    addHelp: true,
    description: 'Creates a project using a Community Connector template.',
  });

  connectorParser.addArgument(['--script_id', '-s'], {
    dest: 'scriptId',
    help: 'The id of the script to clone.',
  });

  connectorParser.addArgument(['--auth_type'], {
    dest: 'authType',
    help: 'The authorization type for the connector.',
    choices: Object.values(AuthType),
  });

  connectorParser.addArgument(['--ts', '--typescript'], {
    dest: 'ts',
    help: 'Use typescript for connector.',
    action: 'storeTrue',
  });

  return connectorParser;
};

const projectNameRegEx = /^([-_A-Za-z\d])+$/;

const projectNameValidator = async (input: string) => {
  if (!projectNameRegEx.test(input)) {
    return 'Name may only include letters, numbers, dashes, and underscores.';
  }
  const projectPath = path.join(constants.PWD, input);
  if (await util.fileExists(projectPath)) {
    return `The directory ${input} already exists.`;
  }
  return true;
};

const commonQuestions: Array<Question<CommonConfig>> = [
  {
    name: 'projectName',
    type: 'input',
    message: 'Project name',
    validate: projectNameValidator,
  },
];

const vizQuestions: Array<Question<VizConfig>> = commonQuestions.concat([
  {
    name: 'devBucket',
    type: 'input',
    message: 'What is your "dev" directory?',
    transformer: addBucketPrefix,
    validate: async (a) => hasBucketPermissions(addBucketPrefix(a)),
  },
  {
    name: 'prodBucket',
    type: 'input',
    message: 'What is your GCS prod directory?',
    transformer: addBucketPrefix,
    validate: async (a) => hasBucketPermissions(addBucketPrefix(a)),
  },
]);

const getAuthHelpText = (authType: AuthType): string => {
  switch (authType) {
    case AuthType.NONE:
      return 'No authentication required.';
    case AuthType.KEY:
      return 'Key or Token';
    case AuthType.OAUTH2:
      return 'Standard OAUTH2';
    case AuthType.USER_PASS:
      return 'Username & Password';
    case AuthType.USER_TOKEN:
      return 'Username & Token';
    case AuthType.PATH_USER_PASS:
      return 'Path & Username & Password';
    default:
      return assertNever(authType);
  }
};

const longestAuthType = Object.values(AuthType)
  .map((a: AuthType): number => a.length)
  .reduce((a, b) => Math.max(a, b), 0);

const connectorQuestions: Array<Question<
  ConnectorConfig
>> = (commonQuestions as Array<Question<ConnectorConfig>>).concat([
  {
    name: 'authType',
    type: 'list',
    when: (answers: ConnectorConfig) =>
      answers.scriptId === undefined || answers.ts === true,
    message: 'How will users authenticate to your service?',
    choices: Object.values(AuthType).map((auth: AuthType) => ({
      name: `${auth.padEnd(longestAuthType)} - ${getAuthHelpText(auth)}`,
      value: auth,
    })),
  },
]);

const getParser = (): argparse.ArgumentParser => {
  const parser = new argparse.ArgumentParser({
    version: constants.packageJSON.version,
    addHelp: true,
    description: 'Tool for generating Data Studio Developer feature projects.',
  });

  const subParser = parser.addSubparsers({
    title: 'Project Type',
    dest: 'projectChoice',
  });

  const vizParser = addVizParser(subParser);
  const connectorParser = addConnectorParser(subParser);
  [vizParser, connectorParser].forEach((p: argparse.ArgumentParser) => {
    p.addArgument(['--name', '-n'], {
      help: 'The name of the project you want to create.',
      dest: 'projectName',
    });
    p.addArgument(['--yarn'], {
      dest: 'yarn',
      action: 'storeTrue',
      help: 'Use yarn as the build tool.',
    });
  });

  return parser;
};

const getMissing = async <T extends U, U>(
  args: T,
  questions: Array<Question<T>>,
  defaults: U
): Promise<T> => {
  // Since args is coming from argparse, they are null if not provided. Since
  // we're cheating a bit and saying that the type that argparse returns is T,
  // we need to remove null values so optional values are undefined instead of
  // null.
  const nonNullArgs = (Object.keys(args) as Array<keyof T>).reduce(
    (acc: T, a: keyof T) => {
      if (acc[a] === null) {
        delete acc[a];
      }
      return acc;
    },
    Object.assign({}, args) as T
  );
  const providedKeys = Object.keys(nonNullArgs);
  const validations = (Object.keys(nonNullArgs) as Array<keyof T>).map(
    async (a: keyof T) => {
      const value = args[a];
      if (value !== undefined) {
        const question = questions.find((q) => q.name === a);
        if (question !== undefined && question.type === 'input') {
          const {validate} = question;
          if (validate !== undefined) {
            return validate((value as any) as string);
          }
        }
      }
    }
  );
  await Promise.all(validations);

  const remainingQuestions = questions
    .filter((q) => providedKeys.find((key) => q.name === key) === undefined)
    .filter((q) => {
      if (q.when !== undefined && typeof q.when === 'function') {
        return q.when(nonNullArgs);
      } else {
        return true;
      }
    });

  const answers = await inquirer.prompt(remainingQuestions);
  return Object.assign(defaults, args, answers);
};

const withMissing = async (
  args: VizConfig | ConnectorConfig
): Promise<VizConfig | ConnectorConfig> => {
  const projectChoice = args.projectChoice;
  switch (projectChoice) {
    case ProjectChoice.CONNECTOR:
      const connectorDefaults: ConnectorConfigHasDefaults = {
        manifestLogoUrl: 'logoUrl',
        manifestCompany: 'manifestCompany',
        manifestCompanyUrl: 'companyUrl',
        manifestAddonUrl: 'addonUrl',
        manifestSupportUrl: 'supportUrl',
        manifestDescription: 'description',
        manifestSources: '',
        authType: AuthType.NONE,
      };
      return getMissing(
        args as ConnectorConfig,
        connectorQuestions,
        connectorDefaults
      );
    case ProjectChoice.VIZ:
      checkGsutilInstalled();
      const vizDefaults: VizConfigHasDefaults = {ts: false};
      return getMissing(args as VizConfig, vizQuestions, vizDefaults);
    default:
      return assertNever(projectChoice);
  }
};

export const getConfig = async (): Promise<VizConfig | ConnectorConfig> => {
  const parser = getParser();
  const args = parser.parseArgs();
  const config = await withMissing(args);
  Object.keys(config).forEach((key) => {
    const val = (config as any)[key];
    if (val === null) {
      delete (config as any)[key];
    }
  });
  return config;
};
