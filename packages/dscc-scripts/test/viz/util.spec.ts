import * as fs from 'mz/fs';
import {VizScripts} from '../../src/args';
import * as sut from '../../src/viz/util';

const readFile = async (fn: string) => {
  const encoding = 'utf-8';
  return fs.readFile(fn, encoding);
};

beforeEach(() => {
  process.env.npm_package_dsccViz_cssFile = 'cssFile';
  process.env.npm_package_dsccViz_jsonFile = 'jsonFile';
  process.env.npm_package_dsccViz_jsFile = 'jsFile';
  process.env.npm_package_dsccViz_gcsDevBucket = 'gcsDevBucket';
  process.env.npm_package_dsccViz_gcsProdBucket = 'gcsProdBucket';
});

test('validateBuildValues happyPath', () => {
  const actual = sut.validateBuildValues({script: VizScripts.BUILD});
  // Don't care about pwd in tests.
  delete actual.pwd;

  expect(actual).toEqual({
    cssFile: 'cssFile',
    devBucket: 'gcsDevBucket',
    devMode: true,
    gcsBucket: 'gcsDevBucket',
    jsFile: 'jsFile',
    jsonFile: 'jsonFile',
    manifestFile: 'manifest.json',
    prodBucket: 'gcsProdBucket',
  });
});

test('validateBuildValues missing cssFile', () => {
  delete process.env.npm_package_dsccViz_cssFile;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.cssFile'
  );
});

test('validateBuildValues missing jsonFile', () => {
  delete process.env.npm_package_dsccViz_jsonFile;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.jsonFile'
  );
});

test('validateBuildValues missing jsFile', () => {
  delete process.env.npm_package_dsccViz_jsFile;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.jsFile'
  );
});

test('validateBuildValues missing gcsDevBucket', () => {
  delete process.env.npm_package_dsccViz_gcsDevBucket;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.gcsDevBucket'
  );
});

test('validateBuildValues missing gcsProdBucket', () => {
  delete process.env.npm_package_dsccViz_gcsProdBucket;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.gcsProdBucket'
  );
});

test('valid manifest', () => {
  const validManifestFn = './test/viz/files/valid_manifest.json';
  return readFile(validManifestFn).then((manifestContents) => {
    expect(sut.validateManifest(manifestContents)).toBe(true);
  });
});

test('invalid manifest', () => {
  const manifestFn = './test/viz/files/manifest_no_privacyPolicyUrl.json';
  return readFile(manifestFn).then((manifestContents) => {
    expect(() => sut.validateManifest(manifestContents)).toThrow(
      'Invalid manifest'
    );
  });
});

test('valid config', () => {
  const validConfigFn = './test/viz/files/valid_config.json';
  return readFile(validConfigFn).then((configContents) => {
    expect(sut.validateConfig(configContents)).toBe(true);
  });
});

test('invalid config', () => {
  const validConfigFn = './test/viz/files/config_extraStyleKey.json';
  return readFile(validConfigFn).then((configContents) => {
    expect(() => sut.validateConfig(configContents)).toThrow('Invalid config');
  });
});

describe('manifest validation', () => {
  test('devMode is a boolean', () => {
    const manifest = JSON.stringify({
      packageUrl: '',
      components: [
        {
          name: '',
          description: '',
          iconUrl: '',
          resource: {
            js: '',
            config: '',
          },
        },
      ],
      devMode: true,
      termsOfServiceUrl: '',
      privacyPolicyUrl: '',
      logoUrl: '',
      description: '',
      organization: '',
      organizationUrl: '',
      name: '',
      supportUrl: '',
    });
    expect(sut.validateManifest(manifest)).toBe(true);
  });
});

describe('config validation', () => {
  test('allows default values for SELECT_SINGLE & SELECT_RADIO', () => {
    const config = JSON.stringify({
      style: [
        {
          id: 'id',
          label: 'label',
          elements: [
            {
              id: 'select-single',
              label: 'My Select Single',
              options: [
                {value: 'first', label: 'First'},
                {value: 'second', label: 'Second'},
              ],
              defaultValue: 'first',
              type: 'SELECT_SINGLE',
            },
            {
              id: 'select-radio',
              label: 'My Select Radio',
              options: [
                {value: 'first', label: 'First'},
                {value: 'second', label: 'Second'},
              ],
              defaultValue: 'second',
              type: 'SELECT_RADIO',
            },
          ],
        },
      ],
    });
    expect(sut.validateConfig(config)).toBe(true);
  });
});
