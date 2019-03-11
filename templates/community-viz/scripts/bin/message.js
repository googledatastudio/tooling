// imports
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));


// constants
const DEV_BUCKET = process.env.npm_package_config_gcsDevBucket;
const MANIFEST_FILE = process.env.npm_package_config_manifestFile;
const CSS_FILE = process.env.npm_package_config_cssFile;
const JSON_FILE = process.env.npm_package_config_jsonFile;

const buildOptions = (TRANSFORM) => {
  return {
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
        { from: path.resolve(__dirname, '../../', 'src', JSON_FILE), to: '.' },
        { from: path.resolve(__dirname, '../../', 'src', CSS_FILE), to: '.' },
      ]),
      new webpack.DefinePlugin({
        TRANSFORM_PARAM: JSON.stringify(TRANSFORM),
      }),
    ],
  };

}

const buildMessage = async (TRANSFORM) => {
  const DEVMODE = true;

  const encoding = 'utf-8';
  const webpackOptions = buildOptions(TRANSFORM);
  const compiler = webpack(webpackOptions);
  const compilerRun = Promise.promisify(compiler.run, { context: compiler });

  var stats = await compilerRun.call();

  // put everything together except the manifest
  // once build directory is created...
  try {
    const manifestSrc = path.resolve(__dirname, '../../', 'src', MANIFEST_FILE);
    const manifestDest = path.resolve(__dirname, '../../', 'build', MANIFEST_FILE);
    var manifestContents = await fs.readFileAsync(manifestSrc, encoding)

    const newManifest = manifestContents
      .replace(/YOUR_GCS_BUCKET/g, DEV_BUCKET)
      .replace(/"DEVMODE_BOOL"/, DEVMODE);
    return fs.writeFileAsync(
      manifestDest,
      newManifest
    )
  }
  catch (err) {
    console.log('Unable to write manifest: ', err);
  };

};

module.exports.buildMessage = buildMessage;
