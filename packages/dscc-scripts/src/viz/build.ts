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

const buildOptions = (
  buildValues: BuildValues,
  componentIndex: number
): webpack.Configuration => {
  const component = buildValues.components[componentIndex];
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
    // Add transform DSCC_IS_LOCAL
    new webpack.DefinePlugin({
      DSCC_IS_LOCAL: 'false',
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
  // common options
  const webpackOptions: webpack.Configuration = {
    plugins,
  };

  // Add js options, if set
  if (component.jsFile) {
    const jsOptions = {
      output: {
        filename: component.jsFile,
        path: path.resolve(buildValues.pwd, 'build'),
      },
      entry: {
        // this is the viz source code
        main: path.resolve(buildValues.pwd, 'src', component.jsFile),
      },
    };
    Object.assign(webpackOptions, jsOptions);
  }
  // Add ts options, if set
  if (component.tsFile) {
    const tsOptions = {
      output: {
        filename: component.tsFile.replace('.ts', '.js'),
        path: path.resolve(buildValues.pwd, 'build'),
      },
      entry: {
        // this is the viz source code
        main: path.resolve(buildValues.pwd, 'src', component.tsFile),
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
  const cwd = process.cwd()!;
  const buildValues = util.validateBuildValues(args);

  for (let i = 0; i < buildValues.components.length; i++) {
    const component = buildValues.components[i];
    console.log(`\n\nBuilding ${component.tsFile} (component ${i})...`);
    const webpackOptions = buildOptions(buildValues, i);
    const compiler = webpack(webpackOptions);

    const compilerRun = bluebird.promisify(compiler.run, {context: compiler});

    // Compile
    const stats = await compilerRun();
    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true, // Shows colors in the console
      })
    );

    // Validate config output
    const configDest = path.resolve(cwd, 'build', component.jsonFile);
    util.validateConfigFile(configDest);
  }

  // Validate final manifest output
  const manifestDest = path.resolve(cwd, 'build', buildValues.manifestFile);
  util.validateManifestFile(manifestDest);
};
