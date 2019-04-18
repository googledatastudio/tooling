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
import {VizConfig} from '../config';
import * as files from '../files';
import {PWD} from '../index';
import {Template} from '../main';
import * as util from '../util';
import {format} from '../util';
import {addBucketPrefix} from './validation';

export const createFromTemplate = async (
  answers: VizConfig
): Promise<number> => {
  answers.devBucket = addBucketPrefix(answers.devBucket);
  answers.prodBucket = addBucketPrefix(answers.prodBucket);
  const {devBucket, prodBucket, projectName, basePath} = answers;
  const templatePath = path.join(basePath, 'templates', answers.projectChoice);
  const projectPath = path.join(PWD, projectName);
  await files.createAndCopyFiles(projectPath, templatePath, projectName);
  const templates: Template[] = [
    {match: /{{DEV_BUCKET}}/g, replace: devBucket!},
    {match: /{{PROD_BUCKET}}/g, replace: prodBucket!},
  ];
  await files.fixTemplates(projectPath, templates);

  await util.spinnify('Installing project dependencies...', async () => {
    if (answers.yarn) {
      await execa('yarn', [], {cwd: projectPath, stdio: 'ignore'});
    } else {
      await execa('npm', ['install'], {cwd: projectPath, stdio: 'ignore'});
    }
  });

  const runCmd = answers.yarn ? 'yarn' : 'npm run';

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
