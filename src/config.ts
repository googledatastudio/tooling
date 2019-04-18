import * as argparse from 'argparse';
import {Question} from 'inquirer';
import inquirer = require('inquirer');
import * as path from 'path';
import {PWD} from './index';
import {assertNever} from './util';
import * as util from './util';
import {
  addBucketPrefix,
  checkGsutilInstalled,
  hasBucketPermissions,
} from './viz/validation';

export enum ProjectChoice {
  VIZ = 'viz',
  CONNECTOR = 'connector',
}

interface CommonConfig {
  yarn: boolean;
  projectName: string;
  projectChoice: ProjectChoice;
  basePath: string;
}

export interface ConnectorConfig extends CommonConfig {
  scriptId?: string;
  manifestLogoUrl: string;
  manifestCompany: string;
  manifestCompanyUrl: string;
  manifestAddonUrl: string;
  manifestSupportUrl: string;
  manifestDescription: string;
  manifestSources: string;
}
export interface VizConfig extends CommonConfig {
  devBucket: string;
  prodBucket: string;
}

const addVizParser = (
  subparser: argparse.SubParser
): argparse.ArgumentParser => {
  const vizParser = subparser.addParser(ProjectChoice.VIZ, {
    addHelp: true,
    description: 'Creates a project using a Community Viz template.',
  });

  vizParser.addArgument(['--devBucket', '-d'], {
    dest: 'devBucket',
    help: 'The dev bucket',
  });

  vizParser.addArgument(['--prodBucket', '-p'], {
    dest: 'prodBucket',
    help: 'The dev bucket',
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

  return connectorParser;
};

const projectNameRegEx = /^([-_A-Za-z\d])+$/;

const projectNameValidator = async (input: string) => {
  if (!projectNameRegEx.test(input)) {
    return 'Name may only include letters, numbers, dashes, and underscores.';
  }
  const projectPath = path.join(PWD, input);
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
    message: 'What is your dev bucket?',
    transformer: addBucketPrefix,
    validate: async (a) => hasBucketPermissions(addBucketPrefix(a)),
  },
  {
    name: 'prodBucket',
    type: 'input',
    message: 'What is your prod bucket?',
    transformer: addBucketPrefix,
    validate: async (a) => hasBucketPermissions(addBucketPrefix(a)),
  },
]);
const connectorQuestions: Array<
  Question<ConnectorConfig>
> = commonQuestions.concat([]);

const getParser = (): argparse.ArgumentParser => {
  const parser = new argparse.ArgumentParser({
    version: process.env.npm_package_version,
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

const getMissing = async <T>(
  args: T,
  questions: Array<Question<T>>,
  defaults = {}
): Promise<T> => {
  const providedKeys = Object.keys(args).filter(
    (a) => (args as any)[a] !== null
  );
  const validations = providedKeys.map(async (a) => {
    const value = (args as any)[a];
    if (value !== undefined) {
      const question = questions.find((q) => q.name === a);
      if (question !== undefined) {
        const {validate} = question;
        if (validate !== undefined) {
          return validate(value);
        }
      }
    }
  });
  await Promise.all(validations);

  const remainingQuestions = questions.filter((q) => {
    return providedKeys.find((key) => q.name === key) === undefined;
  });

  const answers = await inquirer.prompt(remainingQuestions);
  return Object.assign(defaults, args, answers);
};

export const getConfig = async (): Promise<VizConfig | ConnectorConfig> => {
  const parser = getParser();
  const args = parser.parseArgs();
  const projectChoice: ProjectChoice = args.projectChoice as ProjectChoice;
  switch (projectChoice) {
    case ProjectChoice.CONNECTOR:
      return getMissing(args, connectorQuestions, {
        manifestLogoUrl: 'logoUrl',
        manifestCompany: 'manifestCompany',
        manifestCompanyUrl: 'companyUrl',
        manifestAddonUrl: 'addonUrl',
        manifestSupportUrl: 'supportUrl',
        manifestDescription: 'description',
        manifestSources: '',
      });
    case ProjectChoice.VIZ:
      await checkGsutilInstalled();
      return getMissing(args, vizQuestions);
    default:
      return assertNever(projectChoice);
  }
};
