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

export const clone = async (
  appscriptPath: string,
  scriptId: string,
  rootDir?: string
) => {
  const options = {
    cwd: appscriptPath,
  };
  const arg = rootDir ? `--rootDir ${rootDir}` : '';
  await util.exec(`npx @google/clasp clone ${arg} ${scriptId}`, options, false);
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
  deploymentName: string
) => {
  const options = {cwd: appsscriptPath};
  const {out} = await util.exec(
    `npx @google/clasp deploy --description "${deploymentName}"`,
    options,
    false
  );
  const [_, deploymentId] = out.match(
    /- ([-_A-Za-z\d]*) @[0-9]+\./
  ) as string[];
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
): Promise<string | undefined> => {
  const options = {cwd: appsscriptPath};
  const {out} = await util.exec(
    `npx @google/clasp deployments`,
    options,
    false
  );

  const deploymentStrings = out
    .split('\n')
    .filter((s) => s.startsWith('-'))
    .filter((s) => s.includes(name))
    .map((s) => s.match(/- (.*) @.*/));

  if (deploymentStrings.length !== 1) {
    throw new Error(
      `There was more than one deployment with the name: "${name}"`
    );
  }
  const deploymentString = deploymentStrings[0];
  if (deploymentString === null) {
    return undefined;
  }
  const deploymentId = deploymentString[1];
  return deploymentId;
};
