/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Spinner} from 'cli-spinner';
import {Answers} from '../questions';
import * as util from '../util';
import * as appsscript from './appsscript';

const createAppsScriptProject = async (
  appsScriptPath: string,
  projectName: string
) => {
  let couldAuth = true;
  try {
    const isAuth = await appsscript.isAuthenticated();
    if (!isAuth) {
      couldAuth = await appsscript.authenticate();
    }
  } catch (e) {
    throw new Error('Could not check if the user was authenticated.');
  }
  if (!couldAuth) {
    throw new Error('Could not be authenticated.');
  }
  // TODO(mjhamrick) - see if there is a way to check if a user is already
  // logged in with clasp.
  const spinner = new Spinner('Creating Apps Script Project...');
  spinner.start();
  try {
    await appsscript.create(appsScriptPath, projectName);
  } catch (e) {
    spinner.stop(true);
    throw new Error('The appsscript project could not be created.');
  }
  try {
    const scriptId = await appsscript.getScriptId(appsScriptPath);
    spinner.stop();
    return scriptId;
  } catch (e) {
    spinner.stop(true);
    throw new Error('The scriptId could not be obtained.');
  }
};

const push = async (appsScriptPath: string) => {
  const spinner = new Spinner(
    `Pushing files and creating an initial version...`
  );
  spinner.start();
  try {
    await appsscript.push(appsScriptPath);
  } catch (e) {
    spinner.stop(true);
    throw new Error('The files could not be synced with Apps Script.');
  }
  try {
    await appsscript.version(appsScriptPath);
    spinner.stop();
  } catch (e) {
    spinner.stop(true);
    throw new Error('Could not create a new version.');
  }
};

const deploy = async (appsScriptPath: string, deploymentName: string) => {
  try {
    const deploymentId = await appsscript.deploy(
      appsScriptPath,
      '1',
      deploymentName
    );
    return deploymentId;
  } catch (e) {
    throw new Error(`Could not deploy to ${deploymentName}.`);
  }
};

export const projectBuildThings = async (
  projectPath: string,
  projectAnswers: Answers
) => {
  const {yarn, npm} = projectAnswers;
  try {
    if (yarn) {
      await util.exec(`yarn install`, {cwd: projectPath}, false);
    } else {
      await util.exec(`npm install`, {cwd: projectPath}, false);
    }
  } catch (e) {
    if (yarn) {
      throw new Error(`yarn install failed.`);
    } else {
      throw new Error(`npm install failed.`);
    }
  }
};

export const getDeploymentIdByName = async (
  appsscriptPath: string,
  deploymentName: string
) => {
  try {
    return await appsscript.getDeploymentIdByName(
      appsscriptPath,
      deploymentName
    );
  } catch (e) {
    throw new Error(`Could not get the deploymentId for ${deploymentName}.`);
  }
};

export const createFromTemplate = async (answers: Answers): Promise<number> => {
  console.error('Connectors are not currently supported.');
  return 1;
};
