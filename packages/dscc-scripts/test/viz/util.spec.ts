import {VizScripts} from '../../src/args';
import * as sut from '../../src/viz/util';

// Setup a confing that reflects 2 vizes.
beforeEach(() => {
  process.env.npm_package_dsccViz_gcsDevBucket = 'gcsDevBucket';
  process.env.npm_package_dsccViz_gcsProdBucket = 'gcsProdBucket';

  process.env.npm_package_dsccViz_components_0_cssFile = 'cssFile';
  process.env.npm_package_dsccViz_components_0_jsonFile = 'jsonFile';
  process.env.npm_package_dsccViz_components_0_jsFile = 'jsFile';

  process.env.npm_package_dsccViz_components_1_cssFile = 'cssFile_1';
  process.env.npm_package_dsccViz_components_1_jsonFile = 'jsonFile_1';
  process.env.npm_package_dsccViz_components_1_jsFile = 'jsFile_1';
});

test('validateBuildValues happyPath', () => {
  const actual = sut.validateBuildValues({script: VizScripts.BUILD});
  // Don't care about pwd in tests.
  delete actual.pwd;

  const expected: Partial<sut.BuildValues> = {
    components: [
      {
        cssFile: 'cssFile',
        jsonFile: 'jsonFile',
        jsFile: 'jsFile',
      },
      {
        cssFile: 'cssFile_1',
        jsonFile: 'jsonFile_1',
        jsFile: 'jsFile_1',
      },
    ],
    devBucket: 'gcsDevBucket',
    devMode: true,
    gcsBucket: 'gcsDevBucket',
    manifestFile: 'manifest.json',
    prodBucket: 'gcsProdBucket',
  };

  expect(actual).toEqual(expected);
});

test('validateBuildValues missing first jsonFile', () => {
  delete process.env.npm_package_dsccViz_components_0_jsonFile;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.components[0].jsonFile'
  );
});

test('validateBuildValues missing second jsonFile', () => {
  delete process.env.npm_package_dsccViz_components_1_jsonFile;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.components[1].jsonFile'
  );
});

test('validateBuildValues missing first jsFile', () => {
  delete process.env.npm_package_dsccViz_components_0_jsFile;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.components[0].jsFile'
  );
});

test('validateBuildValues missing second jsFile', () => {
  delete process.env.npm_package_dsccViz_components_1_jsFile;

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).toThrow(
    'dsccViz.components[1].jsFile'
  );
});

test('validateBuildValues missing jsFile, but has tsFile', () => {
  delete process.env.npm_package_dsccViz_jsFile;
  process.env.npm_package_dsccViz_tsFile = 'tsFile';

  expect(() => sut.validateBuildValues({script: VizScripts.BUILD})).not.toThrow(
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

describe('start command', () => {
  test('returns correct componentIndex when componentName is defined in the manifest', () => {
    const manifestPath = './test/viz/files/valid_manifest.json';
    const index = sut.getComponentIndex(
      {componentIndex: '0', componentName: 'myViz2', script: VizScripts.START},
      manifestPath
    );
    expect(index).toBe('1');
  });
  test('throws when componentName is not defined in the manifest', () => {
    const manifestPath = './test/viz/files/valid_manifest.json';
    expect(() =>
      sut.getComponentIndex(
        {
          componentIndex: '0',
          componentName: 'thisVizDoesNotExist',
          script: VizScripts.START,
        },
        manifestPath
      )
    ).toThrow('thisVizDoesNotExist is not present in your manifest.json');
  });
});

describe('manifest validation', () => {
  test('passes when all required fields provided', () => {
    const validManifestFn = './test/viz/files/valid_manifest.json';
    expect(() => sut.validateManifestFile(validManifestFn)).not.toThrow();
  });

  test('throws when missing privacyPolicy', () => {
    const manifestFn = './test/viz/files/manifest_no_privacyPolicyUrl.json';
    expect(() => sut.validateManifestFile(manifestFn)).toThrow(
      'Invalid manifest'
    );
  });
});

describe('config validation', () => {
  test('throws when encountering extra key', () => {
    const configPath = './test/viz/files/config_extraStyleKey.json';
    expect(() => sut.validateConfigFile(configPath)).toThrow('Invalid config');
  });

  test('passes when all required fields provided', () => {
    const configPath = 'test/viz/files/valid_config.json';
    expect(sut.validateConfigFile(configPath)).toBe(true);
  });
});
