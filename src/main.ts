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

import {Spinner} from 'cli-spinner';
import * as path from 'path';
import * as questions from './questions';
import * as viz from './viz/index';
import * as connector from './connector/index';

export interface Template {
  match: RegExp;
  replace: string;
}

export const main = async (basePath: string): Promise<void> => {
  try {
    const pwd = process.cwd();
    let answers = await questions.getAllAnswers(basePath);
    const {projectName, projectChoice} = answers;
    const templatePath = path.join(basePath, 'templates', projectChoice);
    const projectPath = path.join(pwd, projectName);
    Object.assign(answers, {basePath, projectPath, templatePath, pwd});

    switch (answers['projectChoice']) {
      case 'community-viz':
        return viz.createFromTemplate(answers);
      case 'community-connector':
        return connector.createFromTemplate(answers);
      default:
        throw new Error("This path shouldn't be reachable");
    }
  } catch (e) {
    console.log(e);
    throw new Error('Something went wrong');
  }
};
