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
import * as bluebird from 'bluebird';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as fs from 'mz/fs';
import * as path from 'path';
import * as webpack from 'webpack';
import {VizArgs} from '../args';
import * as util from './util';
import {BuildValues} from './util';

const buildOptions = (buildValues: BuildValues): webpack.Configuration => {
  // common options
  const webpackOptions: webpack.Configuration = {
    entry: {
      // this is the viz source code
      main: path.resolve(buildValues.pwd, 'src', buildValues.jsFile),
    },
    output: {
      filename: buildValues.jsFile,
      path: path.resolve(buildValues.pwd, 'build'),
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(buildValues.pwd, 'src', buildValues.jsonFile),
          to: '.',
        },
        {from: path.join('src', buildValues.cssFile), to: '.'},
      ]),
    ],
  };

  if (buildValues.devMode) {
    const devOptions = {
      mode: 'development',
    };
    Object.assign(webpackOptions, devOptions);
  } else {
    const prodOptions = {
      mode: 'production',
    };
    Object.assign(webpackOptions, prodOptions);
  }

  return webpackOptions;
};

export const build = async (args: VizArgs) => {
  const buildValues = util.validateBuildValues(args);
  const encoding = 'utf-8';
  const webpackOptions = buildOptions(buildValues);
  const compiler = webpack(webpackOptions);

  const configSrc = path.resolve(process.env.PWD!, 'src', buildValues.jsonFile);
  const configContents = await fs.readFile(configSrc, encoding);
  util.validateConfig(configContents);

  const compilerRun = bluebird.promisify(compiler.run, {context: compiler});

  await compilerRun();

  const manifestSrc = path.resolve(
    process.env.PWD!,
    'src',
    buildValues.manifestFile
  );
  const manifestDest = path.resolve(
    process.env.PWD!,
    'build',
    buildValues.manifestFile
  );
  const manifestContents = await fs.readFile(manifestSrc, encoding);
  util.validateManifest(manifestContents);
  const newManifest = manifestContents
    .replace(/YOUR_GCS_BUCKET/g, buildValues.gcsBucket)
    .replace(/"DEVMODE_BOOL"/, `${buildValues.devMode}`);

  return fs.writeFile(manifestDest, newManifest);
};
