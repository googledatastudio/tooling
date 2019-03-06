import {Inquirer, Questions} from 'inquirer';
import * as path from 'path';
import {PWD} from '../index';
import {prompt} from '../prompt';
import {Answers, Args, CommonAnswers} from '../questions';
import * as util from '../util';

export interface ConnectorAnswers {
  projectName?: string;
  manifestLogoUrl?: string;
  manifestCompany?: string;
  manifestCompanyUrl?: string;
  manifestAddonUrl?: string;
  manifestSupportUrl?: string;
  manifestDescription?: string;
  manifestSources?: string;
}

const sourcesValidator = (input: string) => {
  if (input === '') {
    return true;
  }
  if (input.match(/^[0-9A-Z_]+$/)) {
    return true;
  }
  if (input.match(/^[0-9A-Z_]+(,[0-9A-Z_]+)+$/)) {
    return true;
  }
  return 'Sources must be in the format of SOURCE,SOURCE2,SOURCE3';
};

const questions: Questions<ConnectorAnswers> = [
  {
    name: 'manifestCompany',
    type: 'input',
    message: 'Organization or developer',
  },
  {
    name: 'manifestCompanyUrl',
    type: 'input',
    message: `Organization or developer's website`,
  },
  {
    name: 'manifestLogoUrl',
    type: 'input',
    message: 'Icon URL (Dimensions should be 40x40 px)',
  },
  {
    name: 'manifestAddonUrl',
    type: 'input',
    message: 'Link to page that explains your connector to users',
  },
  {
    name: 'manifestSupportUrl',
    type: 'input',
    message: 'Support page URL',
  },
  {
    name: 'manifestDescription',
    type: 'input',
    message: 'Connector description',
  },
  {
    name: 'manifestSources',
    type: 'input',
    message: 'Sources your connector connects to',
    validate: sourcesValidator,
  },
];

export const getAnswers = async (
  args: Args,
  commonAnswers: CommonAnswers
): Promise<Answers> => {
  const connectorAnswers: ConnectorAnswers = args.useDefaults
    ? {}
    : await prompt(questions);
  // If the answer is empty string, delete and use the default value.
  Object.keys(connectorAnswers).forEach((key) => {
    if ((connectorAnswers as any)[key] === '') {
      delete (connectorAnswers as any)[key];
    }
  });
  return Object.assign(
    {
      manifestLogoUrl: 'templateLogoUrl',
      manifestCompany: 'templateCompany',
      manifestCompanyUrl: 'templateCompanyUrl',
      manifestAddonUrl: 'templateAddonUrl',
      manifestSupportUrl: 'templateSupportUrl',
      manifestDescription: 'templateDescription',
      manifestSources: '',
    },
    connectorAnswers,
    commonAnswers,
    args
  );
};
