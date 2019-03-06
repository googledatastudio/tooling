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

import * as inquirer from 'inquirer';
import * as files from './files';
import * as argparse from 'argparse';
import * as vizQuestions from './viz/questions';
import * as connectorQuestions from './connector/questions';
import {VizAnswers} from './viz/questions';
import {ConnectorAnswers} from './connector/questions';
import {setTimeout} from 'timers';
import {prompt} from './prompt';

export interface State {
  projectPath: string;
  templatePath: string;
}

export type Answers = ConnectorAnswers & VizAnswers & CommonAnswers & Args;

export interface Args {
  yarn: boolean;
  npm: boolean;
}

export interface CommonAnswers {
  projectChoice: ProjectChoice;
  basePath: string;
}

export enum ProjectChoice {
  VIZ = 'community-viz',
  CONNECTOR = 'community-connector',
}

const templateOptions: ProjectChoice[] = [
  ProjectChoice.VIZ,
  ProjectChoice.CONNECTOR,
];

export const questions = [
  {
    name: 'projectChoice',
    type: 'list',
    message: 'What project template would you like to use?',
    choices: templateOptions,
  },
];

const getArgsParser = async (
  baseDir: string
): Promise<argparse.ArgumentParser> => {
  const parser = new argparse.ArgumentParser({
    version: (await files.getPackageJson(baseDir)).version,
    addHelp: true,
    description:
      'Template-based project generator for Data Studio developer features',
  });

  parser.addArgument(['--yarn'], {
    dest: 'yarn',
    action: 'storeTrue',
    help: 'Use yarn as the build tool.',
  });

  parser.addArgument(['--npm'], {
    dest: 'npm',
    action: 'storeTrue',
    help: 'Use npm as the build tool.',
  });
  return parser;
};

export const getAnswers = async (baseDir: string): Promise<Answers> => {
  const args: Args = (await getArgsParser(baseDir)).parseArgs();
  // TODO(me) - Check that the args are valid
  // TODO(me) - If an arg should be used instead of a question, don't ask that question.
  const commonAnswers: CommonAnswers = await prompt(questions);
  switch (commonAnswers.projectChoice) {
    case ProjectChoice.VIZ:
      return vizQuestions.getAnswers(args, commonAnswers);
    case ProjectChoice.CONNECTOR:
      return connectorQuestions.getAnswers(args, commonAnswers);
    default:
      throw new Error(`${commonAnswers.projectChoice} is not supported.`);
  }
};
