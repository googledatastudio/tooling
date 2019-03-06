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

import * as path from 'path';
import * as files from '../files';
import * as util from '../util';

export const create = async (appsscriptPath: string, projectName: string) => {
  const options = {
    cwd: appsscriptPath,
  };
  await util.exec(
    `npx @google/clasp create --title ${projectName} --type standalone --rootDir src`,
    options,
    false
  );
};

export const push = async (appsscriptPath: string) => {
  const options = {cwd: appsscriptPath};
  await util.exec(`npx @google/clasp push --force`, options, false);
};

export const version = async (
  appsscriptPath: string,
  description: string = 'Initial code'
) => {
  const options = {cwd: appsscriptPath};
  await util.exec(`npx @google/clasp version ${description}`, options, false);
};

export const getScriptId = async (appsscriptPath: string) => {
  const claspJsonPath = path.join(appsscriptPath, '.clasp.json');
  const claspJson = await files.parseJsonFile(claspJsonPath);
  return claspJson.scriptId;
};

export const deploy = async (
  appsscriptPath: string,
  versionNumber: string,
  deploymentName: string
) => {
  const options = {cwd: appsscriptPath};
  const {out} = await util.exec(
    `npx @google/clasp deploy --versionNumber ${versionNumber} --description "${deploymentName}"`,
    options,
    false
  );
  const [_, deploymentId] = out.match(/- ([-_A-Za-z\d]*) @1./);
  return deploymentId;
};

// TODO(mjhamrick) - add implementation.
export const isAuthenticated = async () => {
  return true;
};

// TODO(mjhamrick) - add implementation.
export const authenticate = async () => {
  return true;
};

export const getDeploymentIdByName = async (
  appsscriptPath: string,
  name: string
) => {
  const options = {cwd: appsscriptPath};
  const {out} = await util.exec(
    `npx @google/clasp deployments`,
    options,
    false
  );
  const deploymentString = out
    .split('\n')
    .filter((s) => s.startsWith('-'))
    .find((s) => s.includes(name));
  if (!deploymentString) {
    throw new Error(
      `DeploymentName: ${name} was not found in the list of deployments.`
    );
  } else {
    const deploymentId = deploymentString.match(/- (.*) @.*/)[1];
    return deploymentId;
  }
};
