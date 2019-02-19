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
const main = require('../dist/main.js');
const files = require('../dist/files.js');
const impl = require('../dist/impl.js');
const {makeMocksFailOnCall} = require('./test-util.js');

jest.mock('../dist/util.js');
jest.mock('../dist/files.js');
jest.mock('../dist/impl.js');
jest.mock('../dist/impl.js');

let logMock;

const logger = console.log;
beforeEach(() => {
  makeMocksFailOnCall(files, 'files');
  makeMocksFailOnCall(impl, 'impl');
  logMock = jest.fn();
  global.console.log = logger;
});

test('main happy path with npm', async () => {
  global.console.log = logMock;
  const projectChoice = 'myProjectChoice';
  const projectName = 'myProjectName';
  const projectCreator = 'myProjectCreator';

  impl.getUserAnswers.mockResolvedValueOnce(
    Promise.resolve({projectChoice, projectName, projectCreator})
  );
  impl.createAndCopyFiles.mockResolvedValueOnce(
    Promise.resolve('created and copied files')
  );
  impl.createAppsScriptProject.mockResolvedValueOnce(
    Promise.resolve('scriptId')
  );
  files.fixTemplates.mockResolvedValueOnce(Promise.resolve('fixed templates'));
  impl.push.mockResolvedValueOnce(Promise.resolve('pushed some files'));
  impl.deploy.mockResolvedValueOnce(Promise.resolve('deploymentId1'));
  impl.deploy.mockResolvedValueOnce(Promise.resolve('deploymentId2'));
  impl.projectBuildThings.mockResolvedValueOnce(
    Promise.resolve('No npm for you')
  );
  impl.getDeploymentIdByName.mockResolvedValueOnce(
    Promise.resolve('deploymentId3')
  );
  files.fixTemplates.mockResolvedValueOnce(Promise.resolve('fixed templates'));

  await main.main('fakePath');
  expect(logMock.mock.calls[0][0]).toMatch('deploymentId1');
  expect(logMock.mock.calls[0][0]).toMatch('deploymentId2');
  expect(logMock.mock.calls[0][0]).toMatch('deploymentId3');
});

test('main happy with yarn', async () => {
  global.console.log = logMock;
  const projectChoice = 'myProjectChoice';
  const projectName = 'myProjectName';
  const projectCreator = 'myProjectCreator';
  const yarn = true;

  impl.getUserAnswers.mockResolvedValueOnce(
    Promise.resolve({projectChoice, projectName, projectCreator, yarn})
  );
  impl.createAndCopyFiles.mockResolvedValueOnce(
    Promise.resolve('created and copied files')
  );
  impl.createAppsScriptProject.mockResolvedValueOnce(
    Promise.resolve('scriptId')
  );
  files.fixTemplates.mockResolvedValueOnce(Promise.resolve('fixed templates'));
  impl.push.mockResolvedValueOnce(Promise.resolve('pushed some files'));
  impl.deploy.mockResolvedValueOnce(Promise.resolve('deploymentId1'));
  impl.deploy.mockResolvedValueOnce(Promise.resolve('deploymentId2'));
  impl.projectBuildThings.mockResolvedValueOnce(
    Promise.resolve('No npm for you')
  );
  impl.getDeploymentIdByName.mockResolvedValueOnce(
    Promise.resolve('deploymentId3')
  );
  files.fixTemplates.mockResolvedValueOnce(Promise.resolve('fixed templates'));

  await main.main('fakePath');
  expect(logMock.mock.calls[0][0]).toMatch('deploymentId1');
  expect(logMock.mock.calls[0][0]).toMatch('deploymentId2');
  expect(logMock.mock.calls[0][0]).toMatch('deploymentId3');
});

test('main with a broken promise logs errors.', async () => {
  global.console.log = logMock;

  impl.getUserAnswers.mockResolvedValueOnce(Promise.reject('No user answers'));

  try {
    await main.main('fakePath');
    fail();
  } catch (e) {
    expect(e.message).toBe('Something went wrong');
    expect(logMock.mock.calls[0][0]).toBeTruthy();
  }
});
