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
const impl = require('../dist/impl.js');
const util = require('../dist/util.js');
const files = require('../dist/files.js');
const inquirer = require('inquirer');
const appsscript = require('../dist/appsscript.js');
const argparse = require('argparse');
const {makeMocksFailOnCall} = require('./test-util.js');

jest.mock('../dist/util.js');
jest.mock('../dist/files.js');
jest.mock('inquirer');
jest.mock('../dist/appsscript.js');
jest.mock('argparse');

beforeEach(() => {
  makeMocksFailOnCall(util, 'util');
  makeMocksFailOnCall(files, 'files');
  makeMocksFailOnCall(inquirer, 'inquirer');
  makeMocksFailOnCall(appsscript, 'appsscript');
  makeMocksFailOnCall(argparse, 'argparse');
});

test('projectBuildThings happy path', async () => {
  util.execPromise.mockResolvedValue(Promise.resolve('happy exec'));
  await impl.projectBuildThings('fakePath', 'yarn');
});

test('projectBuildThings handles errors', async () => {
  util.execPromise.mockResolvedValue(
    Promise.reject('No exec promise for you!')
  );
  try {
    await impl.projectBuildThings('fakePath', {});
  } catch (e) {
    expect(e.message).toEqual('npm install failed.');
  }
});

test('projectBuildThings handles errors', async () => {
  util.execPromise.mockResolvedValue(
    Promise.reject('No exec promise for you!')
  );
  try {
    await impl.projectBuildThings('fakePath', {yarn: true});
  } catch (e) {
    expect(e.message).toEqual('yarn install failed.');
  }
});

test('createAndCopyFiles happy path', async () => {
  util.makeDirPromise.mockResolvedValue(Promise.resolve('It worked'));
  files.createDirectoryContents.mockResolvedValue(
    Promise.resolve('It worked!')
  );
  await impl.createAndCopyFiles('projectPath', 'templatePath', 'projectName');
});

test('createAndCopyFiles handles makeDirPromise errors', async () => {
  util.makeDirPromise.mockResolvedValue(
    Promise.reject('No makeDirPromise for you!')
  );
  try {
    await impl.createAndCopyFiles('projectPath', 'templatePath', 'projectName');
    fail();
  } catch (e) {
    expect(e.message).toEqual(`Couldn't create directory: projectPath`);
  }
});

test('createAndCopyFiles handles createDirectoryContents errors', async () => {
  util.makeDirPromise.mockResolvedValue(Promise.resolve('It worked!'));
  files.createDirectoryContents.mockResolvedValue(
    Promise.reject('No createDirectoryContents for you!')
  );
  try {
    await impl.createAndCopyFiles('projectPath', 'templatePath', 'projectName');
    fail();
  } catch (e) {
    expect(e.message).toEqual(
      `Couldn't copy over the template files to: projectPath`
    );
  }
});

test('push happy path', async () => {
  appsscript.push.mockResolvedValue(Promise.resolve('true'));
  appsscript.version.mockResolvedValue(Promise.resolve('version'));

  await impl.push('appsScriptPath');
});

test('push no version', async () => {
  appsscript.push.mockResolvedValue(Promise.resolve('true'));
  appsscript.version.mockResolvedValue(Promise.reject('no version'));

  try {
    await impl.push('appsScriptPath');
    fail();
  } catch (e) {
    expect(e.message).toBe('Could not create a new version.');
  }
});

test('push no appsscript push', async () => {
  appsscript.push.mockResolvedValue(Promise.reject('Nah'));

  try {
    await impl.push('appsScriptPath');
    fail();
  } catch (e) {
    expect(e.message).toBe('The files could not be synced with Apps Script.');
  }
});

test(`deploy happy path`, async () => {
  appsscript.deploy.mockResolvedValue(Promise.resolve('okay'));

  const actual = await impl.deploy('appsScriptPath');
  expect(actual).toBe('okay');
});

test(`deploy no appsscript deploy`, async () => {
  appsscript.deploy.mockResolvedValue(Promise.reject('no'));

  try {
    await impl.deploy('appsScriptPath', 'deploymentName');
    fail();
  } catch (e) {
    expect(e.message).toBe('Could not deploy to deploymentName.');
  }
});

test('createAppsScriptProject happy path', async () => {
  appsscript.isAuthenticated.mockResolvedValue(Promise.resolve(true));
  appsscript.create.mockResolvedValue(Promise.resolve(true));
  appsscript.getScriptId.mockResolvedValue(Promise.resolve('myscriptid'));

  const actual = await impl.createAppsScriptProject(
    'appsScriptPath',
    'projectName'
  );
  expect(actual).toEqual('myscriptid');
});

test('createAppsScriptProject happy path, but need to auth', async () => {
  appsscript.isAuthenticated.mockResolvedValue(Promise.resolve(false));
  appsscript.authenticate.mockResolvedValue(Promise.resolve(true));
  appsscript.create.mockResolvedValue(Promise.resolve(true));
  appsscript.getScriptId.mockResolvedValue(Promise.resolve('myscriptid'));

  const actual = await impl.createAppsScriptProject(
    'appsScriptPath',
    'projectName'
  );
  expect(actual).toEqual('myscriptid');
});

test('createAppsScriptProject authBroken', async () => {
  appsscript.isAuthenticated.mockResolvedValue(Promise.reject(false));
  try {
    await impl.createAppsScriptProject('appsScriptPath', 'projectName');
    fail();
  } catch (e) {
    expect(e.message).toEqual('Could not check if the user was authenticated.');
  }
});

test('createAppsScriptProject authBroken2', async () => {
  appsscript.isAuthenticated.mockResolvedValue(Promise.resolve(false));
  appsscript.authenticate.mockResolvedValue(Promise.resolve(false));
  try {
    await impl.createAppsScriptProject('appsScriptPath', 'projectName');
    fail();
  } catch (e) {
    expect(e.message).toEqual('Could not be authenticated.');
  }
});

test('createAppsScriptProject getScriptId broken', async () => {
  appsscript.isAuthenticated.mockResolvedValue(Promise.resolve(true));
  appsscript.create.mockResolvedValue(Promise.resolve(true));
  appsscript.getScriptId.mockResolvedValue(Promise.reject('nope'));

  try {
    await impl.createAppsScriptProject('appsScriptPath', 'projectName');
    fail();
  } catch (e) {
    expect(e.message).toEqual('The scriptId could not be obtained.');
  }
});

test('createAppsScriptProject clasp create broken', async () => {
  appsscript.isAuthenticated.mockResolvedValue(Promise.resolve(true));
  appsscript.create.mockResolvedValue(Promise.reject(true));

  try {
    await impl.createAppsScriptProject('appsScriptPath', 'projectName');
    fail();
  } catch (e) {
    expect(e.message).toEqual('The appsscript project could not be created.');
  }
});

test('projectNameValidator with good input', () => {
  const actual = impl.projectNameValidator('this-is-a-good-name');
  expect(actual).toBe(true);
});

test('projectNameValidator with spaces', () => {
  const actual = impl.projectNameValidator('this is not a good name');
  expect(actual).toBe(
    'Name may only include letters, numbers, dashes, and underscores.'
  );
});

test('projectNameValidator with @', () => {
  const actual = impl.projectNameValidator('this@');
  expect(actual).toBe(
    'Name may only include letters, numbers, dashes, and underscores.'
  );
});

test('getUserAnswers happy path', async () => {
  util.readDirPromise.mockResolvedValueOnce(Promise.resolve(['my', 'options']));
  files.getPackageJson.mockResolvedValueOnce(Promise.resolve({version: '1'}));
  argparse.ArgumentParser.mockImplementation(() => ({
    addArgument: () => 'hi',
    parseArgs: () => ({}),
  }));
  inquirer.prompt.mockResolvedValueOnce(Promise.resolve({answer: 'object'}));

  const actual = await impl.getUserAnswers('baseDir');
  expect(actual).toEqual({answer: 'object'});
});

test('wrapInQuotes test', () => {
  const actual = impl.wrapInQuotes('notinquotes');
  expect(actual).toBe('"notinquotes"');
});

test('getDeploymentIdByName happy path', async () => {
  appsscript.getDeploymentIdByName.mockResolvedValueOnce(
    Promise.resolve('deploymentId')
  );
  const actual = await impl.getDeploymentIdByName(
    'appsscriptPath',
    'deploymentName'
  );
  expect(actual).toBe('deploymentId');
});

test('getDeploymentIdByName appsscript fails', async () => {
  appsscript.getDeploymentIdByName.mockResolvedValueOnce(
    Promise.reject('nope')
  );
  try {
    await impl.getDeploymentIdByName('appsscriptPath', 'deploymentName');
    fail();
  } catch (e) {
    expect(e.message).toBe(
      'Could not get the deploymentId for deploymentName.'
    );
  }
});

test('questionTransformer with no args', () => {
  const args = {
    projectChoice: 'hello there',
  };
  const option = {
    name: 'projectChoice',
  };
  const expected = Object.assign({when: false}, option);
  const actual = impl.questionTransformer(args)(option);
  expect(actual).toEqual(expected);
});

test('questionTransformer with no args choices', () => {
  const args = {};
  const option = {
    name: 'projectChoice',
    choices: [1, 2, 3],
  };
  const expected = Object.assign({}, option);
  const actual = impl.questionTransformer(args)(option);
  expect(actual).toEqual(expected);
});

test('questionTransformer with good arg choices', () => {
  global.console.log = jest.fn();
  const args = {
    projectChoice: 1,
  };
  const option = {
    name: 'projectChoice',
    choices: [1, 2, 3],
  };
  const expected = Object.assign({when: false}, option);
  const actual = impl.questionTransformer(args)(option);
  console.log(option);
  expect(actual).toEqual(expected);
});

test('questionTransformer with bad arg choices', () => {
  logger = jest.fn();
  global.console.log = logger;
  const args = {
    projectChoice: 'hi',
  };
  const option = {
    name: 'projectChoice',
    choices: [1, 2, 3],
  };
  const expected = Object.assign({}, option);
  const actual = impl.questionTransformer(args)(option);
  console.log(option);
  expect(logger.mock.calls[0][0]).toBe(
    'hi is not a valid choice for projectChoice.'
  );
  expect(actual).toEqual(expected);
});

test('questionTransformer with no args validate', () => {
  const args = {};
  const option = {
    name: 'projectChoice',
    validate: (a) => (a === 'hello' ? true : 'bad choice'),
  };
  const expected = Object.assign({}, option);
  const actual = impl.questionTransformer(args)(option);
  expect(actual).toEqual(expected);
});

test('questionTransformer with good arg validate', () => {
  global.console.log = jest.fn();
  const args = {
    projectChoice: 'hello',
  };
  const option = {
    name: 'projectChoice',
    validate: (a) => (a === 'hello' ? true : 'bad choice'),
  };
  const expected = Object.assign({when: false}, option);
  const actual = impl.questionTransformer(args)(option);
  console.log(option);
  expect(actual).toEqual(expected);
});

test('questionTransformer with bad arg validate', () => {
  logger = jest.fn();
  global.console.log = logger;
  const args = {
    projectChoice: 'hi',
  };
  const option = {
    name: 'projectChoice',
    validate: (a) => (a === 'hello' ? true : 'bad choice'),
  };
  const expected = Object.assign({}, option);
  const actual = impl.questionTransformer(args)(option);
  console.log(option);
  expect(actual).toEqual(expected);
  expect(logger.mock.calls[0][0]).toBe('bad choice');
});
