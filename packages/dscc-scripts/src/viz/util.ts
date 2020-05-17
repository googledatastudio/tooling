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
import * as validate from '@google/dscc-validation';
import * as Ajv from 'ajv';
import {existsSync, PathLike, readFileSync} from 'fs';
import {DeploymentChoices, VizArgs} from '../args';
import {invalidVizConfig} from '../util';

export interface BuildValues {
  devBucket: string;
  prodBucket: string;
  manifestFile: 'manifest.json';
  cssFile?: string;
  jsonFile: string;
  jsFile?: string;
  tsFile?: string;
  devMode: boolean;
  pwd: string;
  gcsBucket: string;
}

export const validateBuildValues = (args: VizArgs): BuildValues => {
  const cssFile = process.env.npm_package_dsccViz_cssFile;
  const jsonFile = process.env.npm_package_dsccViz_jsonFile;
  if (jsonFile === undefined) {
    throw invalidVizConfig('jsonFile');
  }
  // Require either jsFile or tsFile
  const jsFile = process.env.npm_package_dsccViz_jsFile;
  const tsFile = process.env.npm_package_dsccViz_tsFile;
  if (jsFile === undefined && tsFile === undefined) {
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
  const pwd = process.cwd()!;
  return {
    devBucket,
    prodBucket,
    manifestFile,
    cssFile,
    jsonFile,
    jsFile,
    tsFile,
    devMode,
    pwd,
    gcsBucket,
  };
};

const friendifyError = (error: Ajv.ErrorObject): string =>
  `The value at: ${error.dataPath} is invalid. ${error.message}.`;

const unique = <T>(ts: T[]): T[] => [...new Set(ts)];

const throwIfErrors = (
  errors: Ajv.ErrorObject[],
  fileType: 'manifest' | 'config'
): void => {
  const friendlyErrors = errors.map(friendifyError);
  const uniqueErrors = unique(friendlyErrors);
  if (uniqueErrors.length !== 0) {
    throw new Error(`Invalid ${fileType}: \n${JSON.stringify(uniqueErrors)}`);
  }
};

export const validateManifestFile = (path: PathLike): boolean => {
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
  throwIfErrors(validate.validateManifest(parsedJson), 'manifest');
  return true;
};

export const validateConfigFile = (path: PathLike): boolean => {
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
  throwIfErrors(validate.validateConfig(parsedJson), 'config');
  return true;
};
