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
import {VizArgs} from '../args';
import * as util from './util';
import {BuildValues} from './util';

const buildOptions = (buildValues: BuildValues): webpack.Configuration => {
  const plugins: webpack.Plugin[] = [
    // Add config
    new CopyWebpackPlugin([
      {from: path.join(buildValues.pwd, 'src', buildValues.jsonFile), to: '.'},
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
  ];

  // Only add in the copy plugin for the css if the user provides a css value in
  // the manifest.
  if (buildValues.cssFile !== undefined) {
    plugins.push(
      new CopyWebpackPlugin([
        {from: path.join('src', buildValues.cssFile), to: '.'},
      ])
    );
  }
  // common options
  const webpackOptions: webpack.Configuration = {
    plugins,
  };

  // Add js options, if set
  if (buildValues.jsFile) {
    const jsOptions = {
      output: {
        filename: buildValues.jsFile,
        path: path.resolve(buildValues.pwd, 'build'),
      },
      entry: {
        // this is the viz source code
        main: path.resolve(buildValues.pwd, 'src', buildValues.jsFile),
      },
    };
    Object.assign(webpackOptions, jsOptions);
  }
  // Add ts options, if set
  if (buildValues.tsFile) {
    const tsOptions = {
      output: {
        filename: buildValues.tsFile.replace('.ts', '.js'),
        path: path.resolve(buildValues.pwd, 'build'),
      },
      entry: {
        // this is the viz source code
        main: path.resolve(buildValues.pwd, 'src', buildValues.tsFile),
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    };
    Object.assign(webpackOptions, tsOptions);
  }

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
  const webpackOptions = buildOptions(buildValues);
  const compiler = webpack(webpackOptions);

  const compilerRun = bluebird.promisify(compiler.run, {context: compiler});

  // Compile
  await compilerRun();

  // Validate output
  const cwd = process.cwd()!;
  const configDest = path.resolve(cwd, 'build', buildValues.jsonFile);
  util.validateConfigFile(configDest);

  const manifestDest = path.resolve(cwd, 'build', buildValues.manifestFile);
  util.validateManifestFile(manifestDest);
};
