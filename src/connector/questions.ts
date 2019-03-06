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

const questions: Questions<ConnectorAnswers> = [];

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
      manifestLogoUrl: 'logoUrl',
      manifestCompany: 'manifestCompany',
      manifestCompanyUrl: 'companyUrl',
      manifestAddonUrl: 'addonUrl',
      manifestSupportUrl: 'supportUrl',
      manifestDescription: 'description',
      manifestSources: '',
    },
    connectorAnswers,
    commonAnswers,
    args
  );
};
