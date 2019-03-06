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

const sourcesValidator = (input: string) => {
  if (input === '') {
    return true;
  }
  if (input.match(/^[A-Z_]+$/)) {
    return true;
  }
  if (input.match(/^[A-Z_]+(,[A-Z_]+)+$/)) {
    return true;
  }
  return 'Sources must be in the format of SOURCE,SOURCE2,SOURCE3';
};

export const getAnswers = async (
  args: Args,
  commonAnswers: CommonAnswers
): Promise<Answers> => {
  const connectorAnswers: ConnectorAnswers = await prompt([
    {
      name: 'projectName',
      type: 'input',
      message: 'Project name',
      validate: projectNameValidator,
    },
    {
      name: 'manifestLogoUrl',
      type: 'input',
      message: 'Logo Url',
    },
    {
      name: 'manifestCompany',
      type: 'input',
      message: 'Company',
    },
    {
      name: 'manifestCompanyUrl',
      type: 'input',
      message: 'Company Url',
    },
    {
      name: 'manifestAddonUrl',
      type: 'input',
      message: 'Addon Url',
    },
    {
      name: 'manifestSupportUrl',
      type: 'input',
      message: 'Support Url',
    },
    {
      name: 'manifestDescription',
      type: 'input',
      message: 'Description',
    },
    {
      name: 'manifestSources',
      type: 'input',
      message: 'Sources',
      validate: sourcesValidator,
    },
  ]);
  Object.keys(connectorAnswers).forEach((key) => {
    // If they left the answer blank, then delete and use the default value.
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
