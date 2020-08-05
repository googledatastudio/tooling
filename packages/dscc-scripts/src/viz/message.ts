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
import * as path from 'path';
import * as webpack from 'webpack';
import {MessageFormat, VizArgs} from '../args';
import {assertNever} from '../util';
import * as util from './util';
import {BuildValues} from './util';

const buildOptions = (
  buildValues: BuildValues,
  args: VizArgs,
  componentIndex: number
): webpack.Configuration => {
  let transformString;
  const format = args.format!;
  const component = buildValues.components[componentIndex];
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

  const plugins: webpack.Plugin[] = [
    // Add config
    new CopyWebpackPlugin([
      {from: path.join(buildValues.pwd, 'src', component.jsonFile), to: '.'},
    ]),
    // Add manifest
    new CopyWebpackPlugin([
      {
        from: path.join('src', buildValues.manifestFile),
        to: '.',
        transform: (content: Buffer) => {
          const manifestContents = content.toString();
          const newManifest = manifestContents
            .replace(/YOUR_GCS_BUCKET/g, buildValues.gcsBucket)
            .replace(/"DEVMODE_BOOL"/, `${buildValues.devMode}`);
          return newManifest;
        },
      },
    ]),
    // Add transform param definition
    new webpack.DefinePlugin({
      TRANSFORM_PARAM: `"${transformString}"`,
    }),
  ];

  // Only add in the copy plugin for the css if the user provides a css value in
  // the manifest.
  if (component.cssFile !== undefined) {
    plugins.push(
      new CopyWebpackPlugin([
        {from: path.join('src', component.cssFile), to: '.'},
      ])
    );
  }

  const outputFilename = (component.jsFile || component.tsFile)!.replace(
    '.ts',
    '.js'
  );

  return {
    mode: 'development',
    entry: {
      // this is the viz source code
      main: path.resolve(__dirname, '../../', 'viz', 'printMessage.js'),
    },
    output: {
      filename: outputFilename,
      path: path.resolve(buildValues.pwd, 'build'),
    },
    plugins,
  };
};

export const buildMessage = async (args: VizArgs) => {
  const buildValues = util.validateBuildValues(args);

  for (let i = 0; i < buildValues.components.length; i++) {
    const webpackOptions = buildOptions(buildValues, args, i);
    const compiler = webpack(webpackOptions);

    const compilerRun = bluebird.promisify(compiler.run, {context: compiler});

    await compilerRun();
  }
};
