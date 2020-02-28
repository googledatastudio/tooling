/*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;
const pkg = require('./package.json');
const path = require('path');

let libraryName = pkg.libraryName;

let plugins = [];
let outputFile;
if (env === 'production') {
  outputFile = libraryName + '.min.js';
  plugins.push(new UglifyJsPlugin({
    sourceMap: false,
    uglifyOptions: {
      extractComments: /^\**!|@preserve|@license|@cc_on/i,
    }
  }));
} else {
  outputFile = libraryName + '.js';
}

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by
      // `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: plugins,
};
