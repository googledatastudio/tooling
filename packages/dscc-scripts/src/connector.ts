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
import * as execa from 'execa';
import * as fs from 'mz/fs';
import open = require('open');
import * as path from 'path';
import terminalLink from 'terminal-link';
import {ConnectorArgs, ConnectorScripts} from './args';
import {assertNever, format, invalidConnectorConfig, pipeStdIO} from './util';

const openDeployment = async (
  deploymentId: string,
  deploymentName: string
): Promise<void> => {
  const deploymentUrl = `https://datastudio.google.com/datasources/create?connectorId=${deploymentId}`;
  const formattedUrl = format.green(
    terminalLink(`${deploymentName} deployment`, deploymentUrl)
  );
  console.log(`Opening: ${formattedUrl}`);
  await open(deploymentUrl);
};

const tryProduction = async (): Promise<void> => {
  const prodDeploymentId = process.env.npm_package_dsccConnector_production;
  if (prodDeploymentId === undefined) {
    throw invalidConnectorConfig('production');
  }
  return openDeployment(prodDeploymentId, 'Production');
};

const tryLatest = async (): Promise<void> => {
  const latestDeploymentId = process.env.npm_package_dsccConnector_latest;
  if (latestDeploymentId === undefined) {
    throw invalidConnectorConfig('latest');
  }
  return openDeployment(latestDeploymentId, 'latest');
};

const updateProduction = async () => {
  const prodDeploymentId = process.env.npm_package_dsccConnector_production;
  if (prodDeploymentId === undefined) {
    throw invalidConnectorConfig('production');
  }
  await execa(
    'npx',
    [
      '@google/clasp',
      'deploy',
      '--deploymentId',
      prodDeploymentId,
      '--description',
      'Production',
    ],
    pipeStdIO
  );
};

const pushChanges = async (args: ConnectorArgs): Promise<void> => {
  const baseCommand = ['@google/clasp', 'push'];
  const command = args.forcePushChanges
    ? baseCommand.concat(['--force'])
    : baseCommand;
  await execa('npx', command, pipeStdIO);
};

const watchChanges = async (): Promise<void> => {
  await execa('npx', ['@google/clasp', 'push', '--watch'], pipeStdIO);
};

const openScript = async (): Promise<void> => {
  await execa('npx', ['@google/clasp', 'open'], pipeStdIO);
};

export const getAppsScriptManifest = async (): Promise<any> => {
  const pwd = process.cwd()!;
  const manifestPath = path.resolve(pwd, 'src', 'appsscript.json');
  const manifestExists = await fs.exists(manifestPath);
  if (!manifestExists) {
    throw missingAppsScriptManifest();
  }
  const manifestJSON = await fs.readFile(manifestPath, 'utf-8');
  try {
    return JSON.parse(manifestJSON);
  } catch (e) {
    console.log(e.message);
    const localManifestPath = format.green('./src/appsscript.json');
    throw new Error(`${localManifestPath} is not valid JSON.`);
  }
};

const missingAppsScriptManifest = () => {
  const appsScriptManifest = format.blue.bold('./src/appsscript.json');
  return new Error(`${appsScriptManifest} must exist.`);
};

const invalidAppsScriptManifest = (propertyPath: string[]) => {
  const colorizedPath = format.green(propertyPath.join('.'));
  const appsScriptManifest = format.blue.bold('./src/appsscript.json');
  const manifest = {
    dataStudio: {
      name: 'filter-pushdown',
      logoUrl: 'logoUrl',
      company: 'manifestCompany',
      companyUrl: 'companyUrl',
      addonUrl: 'addonUrl',
      supportUrl: 'supportUrl',
      description: 'description',
      sources: [''],
      templates: {
        default: 'report-id',
      },
    },
  };
  let manifestString = JSON.stringify(manifest, undefined, '  ');
  manifestString = propertyPath.reduce((acc, property) => {
    return acc.replace(property, format.green(property));
  }, manifestString);
  return new Error(
    `${appsScriptManifest} must have a ${colorizedPath} entry:\n${manifestString}`
  );
};

const openTemplate = async (): Promise<void> => {
  const manifest = await getAppsScriptManifest();
  const templatePath = ['dataStudio', 'templates', 'default'];
  const templateId = templatePath.reduce((acc, property) => {
    return acc === undefined ? undefined : acc[property];
  }, manifest);
  if (templateId === undefined) {
    throw invalidAppsScriptManifest(templatePath);
  }
  const templateUrl = `https://datastudio.google.com/c/reporting/${templateId}`;
  const formattedUrl = format.green(terminalLink(`open template`, templateUrl));
  console.log(`Opening: ${formattedUrl}`);
  await open(templateUrl);
};

export const main = async (args: ConnectorArgs): Promise<void> => {
  switch (args.script) {
    case ConnectorScripts.TRY_PRODUCTION:
      return tryProduction();
    case ConnectorScripts.TRY_LATEST:
      return tryLatest();
    case ConnectorScripts.UPDATE_PRODUCTION:
      return updateProduction();
    case ConnectorScripts.PUSH_CHANGES:
      return pushChanges(args);
    case ConnectorScripts.WATCH_CHANGES:
      return watchChanges();
    case ConnectorScripts.OPEN_SCRIPT:
      return openScript();
    case ConnectorScripts.OPEN_TEMPLATE:
      return openTemplate();
    default:
      return assertNever(args.script);
  }
};
