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
/* eslint no-multi-str: 0 */
const appsscript = require('../dist/appsscript.js');
const util = require('../dist/util.js');
const files = require('../dist/files.js');
const {makeMocksFailOnCall} = require('./test-util.js');

jest.mock('../dist/util');
jest.mock('../dist/files.js');

beforeEach(() => {
  makeMocksFailOnCall(util, 'util');
  makeMocksFailOnCall(files, 'files');
});

test('create happy', async () => {
  util.execPromise.mockResolvedValue(Promise.resolve('yay'));
  await appsscript.create('path', 'projectName');
});

test('create sad', async () => {
  util.execPromise.mockResolvedValue(Promise.reject(':('));
  try {
    await appsscript.create('path', 'projectName');
    fail();
  } catch (e) {
    expect(e).toBe(':(');
  }
});

test('push happy', async () => {
  util.execPromise.mockResolvedValue(Promise.resolve('yay'));
  await appsscript.push('path');
});

test('push sad', async () => {
  util.execPromise.mockResolvedValue(Promise.reject(':('));
  try {
    await appsscript.push('path');
    fail();
  } catch (e) {
    expect(e).toBe(':(');
  }
});

test('version happy', async () => {
  util.execPromise.mockResolvedValue(Promise.resolve('yay'));
  await appsscript.version('path');
});

test('version happy2', async () => {
  util.execPromise.mockResolvedValue(Promise.resolve('yay'));
  await appsscript.version('path', 'mydesc');
});

test('version sad', async () => {
  util.execPromise.mockResolvedValue(Promise.reject(':('));
  try {
    await appsscript.version('path');
    fail();
  } catch (e) {
    expect(e).toBe(':(');
  }
});

test('getScriptId happy', async () => {
  files.parseJsonFile.mockResolvedValue(Promise.resolve('yay'));
  await appsscript.getScriptId('path');
});

test('getScriptId sad', async () => {
  files.parseJsonFile.mockResolvedValue(Promise.reject(':('));
  try {
    await appsscript.getScriptId('path');
    fail();
  } catch (e) {
    expect(e).toBe(':(');
  }
});

test('deploy happy', async () => {
  util.execPromise.mockResolvedValue(Promise.resolve({out: '- mything @1.'}));
  const actual = await appsscript.deploy('path');
  expect(actual).toBe('mything');
});

test('deploy sad', async () => {
  util.execPromise.mockResolvedValue(Promise.reject(':('));
  try {
    await appsscript.deploy('path');
    fail();
  } catch (e) {
    expect(e).toBe(':(');
  }
});

test('isAuthenticated happy', async () => {
  const actual = await appsscript.isAuthenticated();
  expect(actual).toBe(true);
});

test('authenticate happy', async () => {
  const actual = await appsscript.authenticate();
  expect(actual).toBe(true);
});

test('getDeploymentIdByName happy path for normal name', async () => {
  util.execPromise.mockResolvedValueOnce(
    Promise.resolve({
      out:
        '\
2 Deployments.\n\
- deploymentId0 @HEAD \n\
- deploymentId1 @1 - integration\n\
- deploymentId2 @2 - production\n\
',
    })
  );
  const actual = await appsscript.getDeploymentIdByName(
    'appsscriptPath',
    'integration'
  );
  expect(actual).toBe('deploymentId1');
});

test('getDeploymentIdByName not found', async () => {
  util.execPromise.mockResolvedValueOnce(
    Promise.resolve({
      out:
        '\
2 Deployments.\n\
- deploymentId0 @HEAD \n\
- deploymentId1 @1 - integration\n\
- deploymentId2 @2 - production\n\
',
    })
  );
  try {
    await appsscript.getDeploymentIdByName('appsscriptPath', 'nope');
    fail();
  } catch (e) {
    expect(e.message).toBe(
      'DeploymentName: nope was not found in the list of deployments.'
    );
  }
});
