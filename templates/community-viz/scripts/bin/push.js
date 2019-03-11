// imports
const shell = require('shelljs');

// constants
const DEV_BUCKET = process.env.npm_package_config_gcsDevBucket;
const PROD_BUCKET = process.env.npm_package_config_gcsProdBucket;

const deploy = (devMode) => {
  const GCS_BUCKET = devMode ? PROD_BUCKET : DEV_BUCKET;
  shell.cd('build');
  shell.exec('gsutil cp -a public-read * ' + GCS_BUCKET);

  console.log(`Viz deployed to: ${GCS_BUCKET}`);
};

module.exports.deploy = deploy;
