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
const MANIFEST_FILE = 'manifest.json';

const buildOptions = (DEVMODE) => {
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

  return webpackOptions;
};
const buildViz = async (DEVMODE) => {
  const GCS_BUCKET = DEVMODE ? DEV_BUCKET : PROD_BUCKET;
  const encoding = 'utf-8';
  const webpackOptions = buildOptions(DEVMODE);
  const compiler = webpack(webpackOptions);
  const compilerRun = Promise.promisify(compiler.run, {context: compiler});

  var stats = await compilerRun.call();

  try {
    const manifestSrc = path.resolve(__dirname, '../../', 'src', MANIFEST_FILE);
    const manifestDest = path.resolve(
      __dirname,
      '../../',
      'build',
      MANIFEST_FILE
    );
    var manifestContents = await fs.readFileAsync(manifestSrc, encoding);
    const newManifest = manifestContents
      .replace(/YOUR_GCS_BUCKET/g, GCS_BUCKET)
      .replace(/"DEVMODE_BOOL"/, DEVMODE);
    return fs.writeFileAsync(manifestDest, newManifest);
  } catch (err) {
    console.log('Unable to write manifest: ', err);
  }
};

module.exports.buildViz = buildViz;
