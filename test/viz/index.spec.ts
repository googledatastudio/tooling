import * as fs from 'mz/fs';
import * as path from 'path';
import * as constants from '../../src/constants';
import * as files from '../../src/files';
import {ProjectChoice, VizConfig} from '../../src/types';
import * as sut from '../../src/viz';

console.log = jest.fn();

const fiveMinutes = 5 * 60 * 1000;
jest.setTimeout(fiveMinutes);

describe('End-to-end-tests for viz', () => {
  const vizNames = {
    happyPath: 'happy_path_viz',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const hasFile = async (...paths: string[]): Promise<boolean> => {
    return fs.exists(path.resolve(constants.PWD, ...paths));
  };

  test('happy path', async () => {
    const vizName = vizNames.happyPath;
    const config: VizConfig = {
      devBucket: 'test/dscc-gen-test-dev',
      prodBucket: 'test/dscc-gen-test-prod',
      yarn: false,
      codelab: false,
      projectName: vizName,
      projectChoice: ProjectChoice.VIZ,
      basePath: '.',
      temp: 'temp',
    };

    await sut.createFromTemplate(config);
    expect(await hasFile(vizName)).toBeTruthy();
    expect(await hasFile(vizName, 'src', 'index.js')).toBeTruthy();

    await files.remove(vizName);
  });
});
