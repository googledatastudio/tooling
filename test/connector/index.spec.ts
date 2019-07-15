import * as sut from '../../src/connector';
import * as fs from 'mz/fs';
import * as path from 'path';
import * as constants from '../../src/constants';
import * as appsscript from '../../src/connector/appsscript';
import * as validation from '../../src/connector/validation';
import * as files from '../../src/files';
import {
  AuthType,
  ConnectorConfig,
  ConnectorConfigHasDefaults,
  ProjectChoice,
} from '../../src/types';

jest.mock('../../src/connector/appsscript');
jest.mock('../../src/connector/validation');

console.log = jest.fn();

const fiveMinutes = 5 * 60 * 1000;
jest.setTimeout(fiveMinutes);

describe('End-to-end-tests for connectors w/ mocked appsscript & validation', () => {
  const connectorNames = {
    happyPath: 'happy_path',
    happyPathTs: 'happy_path_ts',
  };

  const configDefaults: ConnectorConfigHasDefaults = {
    manifestLogoUrl: 'logoUrl',
    manifestCompany: 'manifestCompany',
    manifestCompanyUrl: 'companyUrl',
    manifestAddonUrl: 'addonUrl',
    manifestSupportUrl: 'supportUrl',
    manifestDescription: 'description',
    manifestSources: '',
    authType: AuthType.NONE,
  };

  const appsscriptMock: jest.Mocked<typeof appsscript> = appsscript as any;
  const validationMock: jest.Mocked<typeof validation> = validation as any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const hasFile = async (...paths: string[]): Promise<boolean> => {
    return fs.exists(path.resolve(constants.PWD, ...paths));
  };

  test('happy path', async () => {
    const connectorName = connectorNames.happyPath;
    validationMock.claspAuthenticated.mockResolvedValue(true);
    appsscriptMock.create.mockResolvedValue();
    appsscriptMock.getDeploymentIdByName.mockResolvedValue('mydeploymentid');

    const config: ConnectorConfig = {
      ...configDefaults,
      yarn: true,
      projectName: connectorName,
      projectChoice: ProjectChoice.CONNECTOR,
      basePath: '.',
    };
    await sut.createFromTemplate(config);
    expect(await hasFile(connectorName)).toBeTruthy();
    expect(await hasFile(connectorName, 'src', 'main.js')).toBeTruthy();

    await files.remove(connectorName);
  });

  test('happy path for typescript', async () => {
    const connectorName = connectorNames.happyPathTs;
    validationMock.claspAuthenticated.mockResolvedValue(true);
    appsscriptMock.create.mockResolvedValue();
    appsscriptMock.getDeploymentIdByName.mockResolvedValue('mydeploymentid');

    const config: ConnectorConfig = {
      ...configDefaults,
      yarn: true,
      ts: true,
      projectName: connectorName,
      projectChoice: ProjectChoice.CONNECTOR,
      basePath: '.',
    };
    await sut.createFromTemplate(config);

    expect(await hasFile(connectorName)).toBeTruthy();
    expect(await hasFile(connectorName, 'src', 'main.ts')).toBeTruthy();

    await files.remove(connectorName);
  });
});
