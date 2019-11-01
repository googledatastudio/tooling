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
import * as execa from 'execa';
import * as path from 'path';
import {PWD} from '../constants';
import * as files from '../files';
import {Template, VizConfig} from '../types';
import * as util from '../util';
import {format} from '../util';
import {addBucketPrefix} from './validation';

export const createFromTemplate = async (
  config: VizConfig
): Promise<number> => {
  config.devBucket = addBucketPrefix(config.devBucket);
  config.prodBucket = addBucketPrefix(config.prodBucket);
  const {devBucket, prodBucket, projectName, basePath} = config;
  const templateName = config.codelab ? 'viz-codelab' : 'viz';
  const templatePath = path.join(basePath, 'templates', templateName);
  const projectPath = path.join(PWD, projectName);
  console.log('before copies');
  await files.createAndCopyFiles(projectPath, templatePath, projectName);
  console.log('finishedcreateAndCopy');
  const templates: Template[] = [
    {match: /{{DEV_BUCKET}}/g, replace: devBucket!},
    {match: /{{PROD_BUCKET}}/g, replace: prodBucket!},
  ];
  console.log('before fix templates');
  await files.fixTemplates(projectPath, templates);
  console.log('after fix templates');

  await util.spinnify('Installing project dependencies...', async () => {
    if (config.yarn) {
      await execa('yarn', [], {cwd: projectPath});
    } else {
      console.log('about to install');
      await execa('npm', ['install'], {cwd: projectPath});
      console.log('i finished installing');
    }
  });

  const runCmd = config.yarn ? 'yarn' : 'npm run';

  const cdDirection = format.blue(`cd ${projectName}`);
  const runStart = format.green(`${runCmd} start`);

  console.log(
    `
Created new community viz: ${projectName}
\n\
${cdDirection} and ${runStart} to begin working on your viz!\n\
    `
  );
  return 0;
};
