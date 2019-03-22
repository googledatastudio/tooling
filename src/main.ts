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

import * as connector from './connector/index';
import * as questions from './questions';
import {ProjectChoice} from './questions';
import * as viz from './viz/index';

export interface Template {
  match: RegExp;
  replace: string;
}

export const main = async (basePath: string): Promise<number> => {
  const answers = await questions.getAnswers();
  Object.assign(answers, {basePath});

  switch (answers.projectChoice) {
    case ProjectChoice.VIZ:
      return viz.createFromTemplate(answers);
    case ProjectChoice.CONNECTOR:
      return connector.createFromTemplate(answers);
    default:
      throw new Error(`${answers.projectChoice} is not supported.`);
  }
};
