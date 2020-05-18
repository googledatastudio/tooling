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
import chalk from 'chalk';
import {CommonOptions} from 'execa';

export const assertNever = (x: never): never => {
  throw new Error('Unexpected object: ' + x);
};

export const format = {
  green: chalk.bold.rgb(15, 157, 88),
  blue: chalk.bold.rgb(66, 133, 244),
  yellow: chalk.bold.rgb(244, 160, 0),
  red: chalk.bold.rgb(219, 68, 55),
};

interface VizConfig {
  dsccViz: {
    gcsDevBucket: string;
    gcsProdBucket: string;
    jsFile?: string;
    tsFile?: string;
    jsonFile: string;
    cssFile: string;
    print: string;
  };
}

const exampleVizConfig: VizConfig = {
  dsccViz: {
    gcsDevBucket: 'gs://validBucketPath',
    gcsProdBucket: 'gs://validBucketPath',
    jsFile: 'index.js',
    jsonFile: 'index.json',
    cssFile: 'index.css',
    print: 'printMessage.js',
  },
};

interface ConnectorConfig {
  dsccConnector: {
    production: string;
    latest: string;
  };
}

const exampleConnectorConfig: ConnectorConfig = {
  dsccConnector: {
    production: 'prodDeploymentId',
    latest: 'latestDeploymentId',
  },
};

const invalidConfig = (path: string, config: VizConfig | ConnectorConfig) => {
  const colorizedPath = format.green(path);
  const packageJSON = format.blue.bold('package.json');
  return new Error(
    `Your ${packageJSON} must have a ${colorizedPath} entry:\n${JSON.stringify(
      config,
      undefined,
      '  '
    )}`
  );
};

export const invalidConnectorConfig = (
  path: keyof ConnectorConfig['dsccConnector']
) => {
  return invalidConfig(`dsccConnector.${path}`, exampleConnectorConfig);
};

export const invalidVizConfig = (path: keyof VizConfig['dsccViz']) => {
  return invalidConfig(`dsccViz.${path}`, exampleVizConfig);
};

export const pipeStdIO: CommonOptions = {stdio: 'inherit'};
