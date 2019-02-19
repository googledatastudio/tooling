/**
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
import {Template} from '../main';
import {Answers} from '../questions';
import * as files from '../files';
import * as util from '../util';
import * as validation from './validation';
import {Spinner} from 'cli-spinner';

export const createFromTemplate = async (answers: Answers): Promise<void> => {
  const {
    projectName,
    basePath,
    projectChoice,
    projectPath,
    templatePath,
    devBucket,
    prodBucket,
  } = answers;
  await files.createAndCopyFiles(projectPath, templatePath, projectName);
  let templates: Template[] = [
    {match: /{{DEV_BUCKET}}/g, replace: devBucket},
    {match: /{{PROD_BUCKET}}/g, replace: prodBucket},
  ];
  await files.fixTemplates(projectPath, templates);

  await util.spinnify(
    'Installing project dependencies...',
    async () => await util.npmInstall(projectPath)
  );

  console.log(
    `Project created. \`cd ${projectName}\` to start working on your viz!`
  );
};
