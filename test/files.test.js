/**
   Copyright 2018 Google LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
const util = require('../dist/util.js');
const files = require('../dist/files.js');

jest.mock('../dist/util.js');

beforeEach(() => {
  util.readFilePromise.mockReset();
  util.statSyncPromise.mockReset();
  util.writeFilePromise.mockReset();
});

test('parseJsonFile happy path', async () => {
  const original = {some: 'json'};
  util.readFilePromise.mockResolvedValueOnce(
    Promise.resolve(JSON.stringify(original))
  );
  const actual = await files.getPackageJson('filePath');
  expect(actual).toEqual(original);
});

test('parseJsonFile no file', async () => {
  util.readFilePromise.mockResolvedValueOnce(Promise.reject('Was not there'));
  try {
    await files.parseJsonFile('filePath');
    fail();
  } catch (e) {
    expect(e.message).toBe('Could not read: filePath');
  }
});

test('createDirectoryContents happyPath', async () => {
  util.readDirPromise
    .mockResolvedValueOnce(Promise.resolve(['.npmignore', 'path2']))
    .mockResolvedValueOnce(Promise.resolve(['path3']));

  util.readFilePromise.mockResolvedValueOnce(Promise.resolve('contents1'));
  util.readFilePromise.mockResolvedValueOnce(Promise.resolve('contents2'));

  util.statSyncPromise
    .mockResolvedValueOnce({isFile: () => true})
    .mockResolvedValueOnce({isFile: () => false, isDirectory: () => true})
    .mockResolvedValueOnce({isFile: () => true});

  await files.createDirectoryContents('templatePath', 'newProjectPath');
  const writeFileCalls = util.writeFilePromise.mock.calls;
  expect(writeFileCalls[0][1]).toBe('contents1');
  expect(writeFileCalls[1][1]).toBe('contents2');
});

test('createDirectoryContents not a file', async () => {
  util.readDirPromise.mockResolvedValueOnce(Promise.resolve(['notafile']));

  util.statSyncPromise.mockResolvedValueOnce({
    isFile: () => false,
    isDirectory: () => false,
  });

  try {
    await files.createDirectoryContents('templatePath', 'newProjectPath');
    fail();
  } catch (e) {
    expect(e.message).toBe('templatePath/notafile is not a file or directory.');
  }
});

test('fixTemplates happyPath', async () => {
  const one = 'one';
  const two = 'two';
  const three = 'three';

  util.readDirPromise
    .mockResolvedValueOnce(Promise.resolve(['path1', 'path2']))
    .mockResolvedValueOnce(Promise.resolve(['path3']));

  util.readFilePromise
    .mockResolvedValueOnce(Promise.resolve('{{ONE}} - {{TWO}} - {{THREE}}'))
    .mockResolvedValueOnce(Promise.resolve('{{ONE}} - {{TWO}} - {{THREE}}'));

  util.statSyncPromise
    .mockResolvedValueOnce({isFile: () => true})
    .mockResolvedValueOnce({isFile: () => false, isDirectory: () => true})
    .mockResolvedValueOnce({isFile: () => true});

  await files.fixTemplates('baseDirectory', [
    {match: /{{ONE}}/g, replace: one},
    {match: /{{TWO}}/g, replace: two},
    {match: /{{THREE}}/g, replace: three},
  ]);

  const writeFileCalls = util.writeFilePromise.mock.calls;
  expect(writeFileCalls[0][1]).toBe('one - two - three');
  expect(writeFileCalls[1][1]).toBe('one - two - three');
});

test('fixTemplates not a file', async () => {
  const projectName = 'myProjectName';
  const projectCreator = 'myProjectCreator';
  const scriptId = 'myScriptId';

  util.readDirPromise.mockResolvedValueOnce(Promise.resolve(['notafile']));

  util.statSyncPromise.mockResolvedValueOnce({
    isFile: () => false,
    isDirectory: () => false,
  });

  try {
    await files.fixTemplates('baseDirectory', {
      projectName,
      projectCreator,
      scriptId,
    });
    fail();
  } catch (e) {
    expect(e.message).toBe(
      'baseDirectory/notafile is not a file or directory.'
    );
  }
});
