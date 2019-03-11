#!/usr/bin/env node

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

const argparse = require('argparse');
const shell = require('shelljs');
const chalk = require('chalk');

const msg = require('./bin/message.js');
const push = require('./bin/push.js');
const build = require('./bin/build.js');

const parser = new argparse.ArgumentParser({
  version: '1.0',
  addHelp: true,
  description: 'Scripts to manage viz dev and deployment',
});

parser.addArgument(['-s', '--script'], {
  choices: ['start', 'build', 'push', 'updateMessage'],
  dest: 'script',
  help: 'The script to run.',
  required: true,
});

parser.addArgument(['-p', '--prod'], {
  choices: ['false', 'true'],
  dest: 'prod',
  help:
    'Whether or not to use production options. Only required for the build and push scripts.',
  required: false,
});

parser.addArgument(['-f', '--format'], {
  choices: ['object', 'table'],
  dest: 'format',
  help: 'The format for the data. Only required for the updateMessage script.',
  required: false,
});

const args = parser.parseArgs();

switch (args.script) {
  case 'start':
    shell.exec('webpack-dev-server --open');
    break;

  case 'build':
    var DEVMODE = args.prod === 'true' ? false : true;
    build.buildViz(DEVMODE);
    break;

  case 'push':
    var DEVMODE = args.prod === 'true' ? false : true;
    push.deploy(DEVMODE);
    break;

  case 'updateMessage':
    if (args.format !== 'object' && args.format !== 'table') {
      const updateMessage = chalk.blue.bold('npm run updateMessage');
      const tableCommand = chalk.green.bold('table');
      const objectCommand = chalk.green.bold('object');
      console.log(`
        ${updateMessage} expects an argument. Try running: \n
        ${updateMessage} ${tableCommand} \n
        or \n
        ${updateMessage} ${objectCommand} \n
      `);
      break;
    }
    var FORMAT = args.format === 'table' ? 'tableTransform' : 'objectTransform';
    msg.buildMessage(FORMAT).then(() => push.deploy(true));
    break;
}
