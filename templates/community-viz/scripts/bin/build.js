// imports
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

// constants
const DEV_BUCKET = process.env.npm_package_config_gcsDevBucket;
const PROD_BUCKET = process.env.npm_package_config_gcsProdBucket;
const JS_FILE = process.env.npm_package_config_jsFile;
const CSS_FILE = process.env.npm_package_config_cssFile;
const JSON_FILE = process.env.npm_package_config_jsonFile;
const MANIFEST_FILE = "manifest.json";

const buildViz = (DEVMODE) => {
  const GCS_BUCKET = DEVMODE ? DEV_BUCKET : PROD_BUCKET;

  const encoding = 'utf-8';
  // common options
  let webpackOptions = {
    entry: {
      // this is the viz source code
      main: path.resolve(__dirname, '../../', 'src', JS_FILE),
    },
    output: {
      filename: JS_FILE,
      path: path.resolve(__dirname, '../../', 'build'),
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: path.resolve(__dirname, '../../', 'src', JSON_FILE), to: '.'},
        {from: path.join('src', CSS_FILE), to: '.'},
      ]),
    ],
  };

  if (DEVMODE === true) {
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

  const compiler = webpack(webpackOptions);

  // put everything together except the manifest
  compiler.run((err, stats) => {
    // once build directory is created...
    fs.readFileAsync(
      path.resolve(__dirname, '../../src', MANIFEST_FILE),
      encoding
    ).then((value) => {
      const newManifest = value
        .replace(/YOUR_GCS_BUCKET/g, DEV_BUCKET)
        .replace(/"DEVMODE_BOOL"/, DEVMODE);
      fs.writeFileAsync(
        path.resolve(__dirname, '../../', 'build', MANIFEST_FILE),
        newManifest
      ).catch((err) => {
        console.log('Unable to write manifest: ', err);
      });
    });
  });
};

module.exports.buildViz = buildViz;
