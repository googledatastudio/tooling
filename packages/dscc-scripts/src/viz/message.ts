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
import {MessageFormat, VizArgs} from '../args';
import {assertNever} from '../util';
import * as util from './util';
import {BuildValues} from './util';

const buildOptions = (
  buildValues: BuildValues,
  args: VizArgs
): webpack.Configuration => {
  let transformString;
  const format = args.format!;
  switch (format) {
    case MessageFormat.OBJECT:
      transformString = 'objectTransform';
      break;
    case MessageFormat.TABLE:
      transformString = 'tableTransform';
      break;
    default:
      return assertNever(format);
  }

  return {
    mode: 'development',
    entry: {
      // this is the viz source code
      main: path.resolve(__dirname, '../../', 'viz', 'printMessage.js'),
    },
    output: {
      filename: 'index.js',
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
      new webpack.DefinePlugin({
        TRANSFORM_PARAM: `"${transformString}"`,
      }),
    ],
  };
};

export const buildMessage = async (args: VizArgs) => {
  const buildValues = util.validateBuildValues(args);
  const encoding = 'utf-8';
  const webpackOptions = buildOptions(buildValues, args);
  const compiler = webpack(webpackOptions);
  const compilerRun = bluebird.promisify(compiler.run, {context: compiler});

  await compilerRun();

  // put everything together except the manifest
  // once build directory is created...
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
  const newManifest = manifestContents
    .replace(/YOUR_GCS_BUCKET/g, buildValues.gcsBucket)
    .replace(/"DEVMODE_BOOL"/, `${buildValues.devMode}`);

  return fs.writeFile(manifestDest, newManifest);
};
