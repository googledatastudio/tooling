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

const args = process.argv.slice(2);
const shell = require('shelljs');
const chalk = require('chalk');
const script = args[0];

const msg =  require('./bin/message.js');
const push = require('./bin/push.js');
const build = require('./bin/build.js')

switch(script){
  case 'start':
    shell.exec('webpack-dev-server --open');
    break;

  case 'build':
    // TODO: THESE CAN BE FUNCTIONS ITS LITERALLY ALL JAVASCRIPT
    var DEVMODE = args[1].split(":")[1] === 'true' ? true : false;
    build.buildViz(DEVMODE);
    break;

  case 'push' :
    var DEVMODE = args[1].split(":")[1] === 'true' ? false : true;
    push.deploy(DEVMODE);
    break;

  case 'updateMessage':
    if (args[1] === 'table' | (args[1] === 'object')){
      var FORMAT = args[1] === 'table' ? 'tableTransform' : 'objectTransform';
    } else{
      const tableCommand = chalk.green('npm run updateMessage table');
      const objectCommand = chalk.green('npm run updateMessage object');
      console.log(`
        Try running: \n
        ${tableCommand} \n
        or \n
        ${objectCommand} \n
      `);
      break;
    }

    msg.buildMessage(FORMAT)
    push.deploy(true);
    break;

}
