import * as execa from 'execa';
import open = require('open');
import {ConnectorScripts} from '../src/args';
import * as sut from '../src/connector';
jest.mock('open');
jest.mock('execa');

const logMock = jest.fn();

beforeEach(() => {
  logMock.mockClear();
  global.console = Object.assign(global.console, {log: logMock});
  (open as any).mockClear();
  (execa as any).mockClear();
  process.env.npm_package_dsccConnector_latest = 'latestId';
  process.env.npm_package_dsccConnector_production = 'productionId';
  process.env.npm_package_dsccConnector_template = 'templateId';
});

test('try_production happy path', async () => {
  (open as any).mockResolvedValue(undefined);

  expect(await sut.main({script: ConnectorScripts.TRY_PRODUCTION})).toEqual(
    undefined
  );
  expect(logMock.mock.calls[0][0]).toMatch('Opening:');
  expect(logMock.mock.calls[0][0]).toMatch('Production deployment');
});

test('try_latest happy path', async () => {
  (open as any).mockResolvedValue(undefined);

  expect(await sut.main({script: ConnectorScripts.TRY_LATEST})).toEqual(
    undefined
  );
  expect(logMock.mock.calls[0][0]).toMatch('Opening:');
  expect(logMock.mock.calls[0][0]).toMatch('latest deployment');
});

test('update_production happy path', async () => {
  (execa as any).mockResolvedValue('');

  expect(await sut.main({script: ConnectorScripts.UPDATE_PRODUCTION})).toEqual(
    undefined
  );
});

test('try_production missing from package.json', () => {
  delete process.env.npm_package_dsccConnector_production;

  expect(sut.main({script: ConnectorScripts.TRY_PRODUCTION})).rejects.toThrow(
    'production'
  );
});

test('try_latest missing from package.json', () => {
  delete process.env.npm_package_dsccConnector_latest;

  expect(sut.main({script: ConnectorScripts.TRY_LATEST})).rejects.toThrow(
    'latest'
  );
});

test('update_production missing from package.json', () => {
  delete process.env.npm_package_dsccConnector_production;

  expect(
    sut.main({script: ConnectorScripts.UPDATE_PRODUCTION})
  ).rejects.toThrow('production');
});

describe('for push', () => {
  beforeEach(() => {
    (execa as any).mockClear();
  });

  test('no additional args', async () => {
    expect(await sut.main({script: ConnectorScripts.PUSH_CHANGES})).toEqual(
      undefined
    );
    expect((execa as any).mock.calls[0][1]).toEqual(['@google/clasp', 'push']);
  });

  test('with force argument', async () => {
    expect(
      await sut.main({
        script: ConnectorScripts.PUSH_CHANGES,
        forcePushChanges: true,
      })
    ).toEqual(undefined);
    expect((execa as any).mock.calls[0][1]).toEqual([
      '@google/clasp',
      'push',
      '--force',
    ]);
  });
});

describe('for open_template', () => {
  const validManifest = {dataStudio: {templates: {default: 'report-id'}}};

  beforeEach(() => {
    logMock.mockClear();
    jest
      .spyOn(sut, 'getAppsScriptManifest')
      .mockImplementation()
      .mockResolvedValue(validManifest);
  });

  test('happy path', async () => {
    (open as any).mockResolvedValue(undefined);

    expect(await sut.main({script: ConnectorScripts.OPEN_TEMPLATE})).toEqual(
      undefined
    );
    expect(logMock.mock.calls[0][0]).toMatch('Opening:');
    expect(logMock.mock.calls[0][0]).toMatch('template');
  });

  test('template missing from package.json', () => {
    delete validManifest.dataStudio.templates;

    expect(sut.main({script: ConnectorScripts.OPEN_TEMPLATE})).rejects.toThrow(
      'template'
    );
  });
});
