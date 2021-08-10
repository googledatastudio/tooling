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

export interface ComponentBuildValues {
  cssFile?: string;
  jsonFile: string;
  jsFile?: string;
  tsFile?: string;
}

export interface BuildValues {
  devBucket: string;
  prodBucket: string;
  // TODO - Why is this a constant?
  manifestFile: 'manifest.json';
  components: ComponentBuildValues[];
  devMode: boolean;
  pwd: string;
  gcsBucket: string;
}

export const validateBuildValues = (args: VizArgs): BuildValues => {
  const components = getBuildableComponents();

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
    components,
    devBucket,
    prodBucket,
    manifestFile,
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

interface VizComponent {
  name: string;
}

// TODO - Add in other values as needed.
export interface VizManifest {
  components: VizComponent[];
}

export const validateManifestFile = (path: PathLike): VizManifest => {
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
  return parsedJson;
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

export const getBuildableComponents = (): ComponentBuildValues[] => {
  const components: ComponentBuildValues[] = [];

  const lastComponentIdx = Object.keys(process.env)
    .filter((key) => key.startsWith('npm_package_dsccViz_components_'))
    .map((s) => s.replace('npm_package_dsccViz_components_', ''))
    .map((a) => parseInt(a, 10))
    .reduce((a, b) => (a > b ? a : b), 0);

  // Check for vizpack configuration
  for (let idx = 0; idx <= lastComponentIdx; idx++) {
    const jsonFile =
      process.env[`npm_package_dsccViz_components_${idx}_jsonFile`];

    if (!jsonFile) {
      throw invalidVizConfig(`components[${idx}].jsonFile`);
    }

    const cssFile =
      process.env[`npm_package_dsccViz_components_${idx}_cssFile`];
    // Require either jsFile or tsFile
    const jsFile = process.env[`npm_package_dsccViz_components_${idx}_jsFile`];
    const tsFile = process.env[`npm_package_dsccViz_components_${idx}_tsFile`];

    if (jsFile === undefined && tsFile === undefined) {
      throw invalidVizConfig(`components[${idx}].jsFile`);
    }

    components.push({
      jsonFile,
      cssFile,
      jsFile,
      tsFile,
    });
  }

  return components;
};

export const getComponentIndex = (
  args: VizArgs,
  manifestPath: PathLike
): string => {
  if (args.componentName) {
    const componentName = args.componentName;

    const manifest: VizManifest = validateManifestFile(manifestPath);
    const idx = manifest.components.findIndex(
      (component) => component.name === componentName
    );
    if (idx === -1) {
      throw new Error(`${componentName} is not present in your manifest.json`);
    }
    return idx.toString();
  }
  return '0';
};
