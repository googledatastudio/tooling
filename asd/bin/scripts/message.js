// imports
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const program = require('commander');


// constants
const DEV_BUCKET = process.env.npm_package_config_gcsDevBucket;
const MANIFEST_FILE = process.env.npm_package_config_manifestFile;
const CSS_FILE = process.env.npm_package_config_cssFile;
const JSON_FILE = process.env.npm_package_config_jsonFile;


program
  .option('-f, --format', '?', /^(object|table)$/i, 'object')
  .parse(process.argv);

const TRANSFORM = program.args[0] === 'table' ? 'tableTransform' : 'objectTransform';
console.log(TRANSFORM);

// default to dev if it's not prod
const DEVMODE = true;
const GCS_BUCKET = DEV_BUCKET;

const encoding = 'utf-8';

let webpackOptions = {
  mode: 'development',
  entry: {
    // this is the viz source code
    main: path.resolve(__dirname, '../viz', 'printMessage.js'),
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../../', 'build'),
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, '../../', 'src', JSON_FILE), to: '.'},
      {from: path.join('src', CSS_FILE), to: '.'},
    ]),
    new webpack.DefinePlugin({
      'TRANSFORM_PARAM': JSON.stringify(TRANSFORM)
    })
  ],
};

const compiler = webpack(webpackOptions);

// put everything together except the manifest
compiler.run((err, stats) => {
  // once build directory is created...
  fs.readFileAsync(path.join('src', MANIFEST_FILE), encoding).then((value) => {
    const newManifest = value
      .replace(/YOUR_GCS_BUCKET/g, GCS_BUCKET)
      .replace(/"DEVMODE_BOOL"/, DEVMODE);
    fs.writeFileAsync(path.join('./build', MANIFEST_FILE), newManifest).catch(
      (err) => {
        console.log('Unable to write manifest: ', err);
      }
    );
  });
});

