import {Answers, Args, CommonAnswers} from '../questions';

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

export const getAnswers = async (
  args: Args,
  commonAnswers: CommonAnswers
): Promise<Answers> => {
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
    commonAnswers,
    args
  );
};
