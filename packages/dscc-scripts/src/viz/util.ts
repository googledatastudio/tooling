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
import * as Ajv from 'ajv';
import {DeploymentChoices, VizArgs} from '../args';
import {invalidVizConfig} from '../util';
import {configSchema, manifestSchema} from './schemas';
import {PathLike, existsSync, readFileSync} from 'fs';

export interface BuildValues {
  devBucket: string;
  prodBucket: string;
  manifestFile: 'manifest.json';
  cssFile: string;
  jsonFile: string;
  jsFile: string;
  devMode: boolean;
  pwd: string;
  gcsBucket: string;
}

export const validateBuildValues = (args: VizArgs): BuildValues => {
  const cssFile = process.env.npm_package_dsccViz_cssFile;
  if (cssFile === undefined) {
    throw invalidVizConfig('cssFile');
  }
  const jsonFile = process.env.npm_package_dsccViz_jsonFile;
  if (jsonFile === undefined) {
    throw invalidVizConfig('jsonFile');
  }
  const jsFile = process.env.npm_package_dsccViz_jsFile;
  if (jsFile === undefined) {
    throw invalidVizConfig('jsFile');
  }
  const devBucket = process.env.npm_package_dsccViz_gcsDevBucket;
  if (devBucket === undefined) {
    throw invalidVizConfig('gcsDevBucket');
  }
  const prodBucket = process.env.npm_package_dsccViz_gcsProdBucket;
  if (prodBucket === undefined) {
    throw invalidVizConfig('gcsProdBucket');
  }
  const devMode = args.deployment === DeploymentChoices.PROD ? false : true;
  const gcsBucket = devMode ? devBucket : prodBucket;
  const manifestFile = 'manifest.json';
  const pwd = process.env.PWD!;
  return {
    devBucket,
    prodBucket,
    manifestFile,
    cssFile,
    jsonFile,
    jsFile,
    devMode,
    pwd,
    gcsBucket,
  };
};

export const validateManifest = (manifest: object) => {
  const ajv = new Ajv({allErrors: true});
  const configValidator = ajv.compile(manifestSchema);
  const isValidConfig = configValidator(manifest);
  const friendlyMessage = JSON.stringify(
    (configValidator.errors || []).map((error) => error),
    undefined,
    '  '
  );
  if (!isValidConfig) {
    throw new Error(`Invalid manifest:\n  ${friendlyMessage}`);
  }
  return true;
};

export const validateManifestFile = (path: PathLike) => {
  const fileExists = existsSync(path);
  if (!fileExists) {
    throw new Error(`The file: \n${path}\n was not found.`);
  }
  const fileContents = readFileSync(path, 'utf8');
  let parsedJson;
  try {
    parsedJson = JSON.parse(fileContents);
  } catch (e) {
    throw new Error(`The file:\n ${path}\n could not be parsed as JSON. `);
  }
  return validateManifest(parsedJson);
};

export const validateConfig = (config: object) => {
  const ajv = new Ajv({allErrors: true});
  const configValidator = ajv.compile(configSchema);
  const isValidConfig = configValidator(config);
  const friendlyMessage = JSON.stringify(
    (configValidator.errors || []).map((error) => error.message),
    undefined,
    '  '
  );
  if (!isValidConfig) {
    throw new Error(`Invalid config:\n  ${friendlyMessage}`);
  }
  return true;
};

export const validateConfigFile = (path: PathLike) => {
  const fileExists = existsSync(path);
  if (!fileExists) {
    throw new Error(`The file: \n${path}\n was not found.`);
  }
  const fileContents = readFileSync(path, 'utf8');
  let parsedJson;
  try {
    parsedJson = JSON.parse(fileContents);
  } catch (e) {
    throw new Error(`The file:\n ${path}\n could not be parsed as JSON. `);
  }
  return validateConfig(parsedJson);
};
