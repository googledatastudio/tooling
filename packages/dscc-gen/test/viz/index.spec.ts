import * as fs from 'mz/fs';
import * as path from 'path';
import * as constants from '../../src/constants';
import * as files from '../../src/files';
import {ProjectChoice, VizConfig} from '../../src/types';
import * as sut from '../../src/viz';

console.log = jest.fn();

const fiveMinutes = 5 * 60 * 1000;
jest.setTimeout(fiveMinutes);

const hasFile = async (...paths: string[]): Promise<boolean> => {
  return fs.exists(path.resolve(constants.PWD, ...paths));
};

describe('End-to-end-tests for viz', () => {
  const vizNames = {
    happyPath: 'happy_path_viz',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    };

    await sut.createFromTemplate(config);
    expect(await hasFile(vizName)).toBeTruthy();
    expect(await hasFile(vizName, 'src', 'index.js')).toBeTruthy();

    files.remove(vizName);
  });
});

describe('End-to-end-tests for viz codelab', () => {
  const vizNames = {
    happyPath: 'happy_path_viz',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const fileContains = async (
    checkString: string,
    ...paths: string[]
  ): Promise<boolean> => {
    const fileContents = fs.readFileSync(path.resolve(constants.PWD, ...paths));
    return fileContents.includes(checkString);
  };

  test('happy path', async () => {
    const vizName = vizNames.happyPath;
    const config: VizConfig = {
      devBucket: 'test/dscc-gen-test-dev',
      prodBucket: 'test/dscc-gen-test-prod',
      yarn: false,
      codelab: true,
      projectName: vizName,
      projectChoice: ProjectChoice.VIZ,
      basePath: '.',
    };

    const checkString = '<code>dscc-gen</code> codelab';

    await sut.createFromTemplate(config);
    expect(await hasFile(vizName)).toBeTruthy();
    expect(await hasFile(vizName, 'src', 'index.js')).toBeTruthy();
    expect(await fileContains(checkString, vizName, 'src', 'index.js'));

    files.remove(vizName);
  });
});
