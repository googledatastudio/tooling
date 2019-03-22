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

import * as argparse from 'argparse';
import {Question} from 'inquirer';
import * as path from 'path';
import * as connectorQuestions from './connector/questions';
import {ConnectorAnswers} from './connector/questions';
import * as files from './files';
import {PWD} from './index';
import {prompt} from './prompt';
import * as util from './util';
import * as vizQuestions from './viz/questions';
import {VizAnswers} from './viz/questions';

export interface State {
  projectPath: string;
  templatePath: string;
}

export type Answers = ConnectorAnswers & VizAnswers & CommonAnswers & Args;

export interface Args {
  yarn: boolean;
  npm: boolean;
  scriptId?: string;
}

export interface CommonAnswers {
  projectChoice: ProjectChoice;
  projectName: string;
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

interface QuestionName {
  cmdName: string;
  inquirerName: string;
}

const PROJECT_CHOICE: QuestionName = {
  cmdName: '--project_choice',
  inquirerName: 'projectChoice',
};

const PROJECT_NAME: QuestionName = {
  cmdName: '--project_name',
  inquirerName: 'projectName',
};

const projectNameRegEx = /^([-_A-Za-z\d])+$/;

const projectNameValidator = async (input: string) => {
  if (!projectNameRegEx.test(input)) {
    return 'Name may only include letters, numbers, dashes, and underscores.';
  }
  const projectPath = path.join(PWD, input);
  if (await util.fileExists(projectPath)) {
    return `The directory ${input} already exists.`;
  }
  return true;
};

export const COMMON_QUESTIONS: Array<Question<CommonAnswers>> = [
  {
    name: PROJECT_CHOICE.inquirerName,
    type: 'list',
    message: 'What project template would you like to use?',
    choices: templateOptions,
  },
  {
    name: PROJECT_NAME.inquirerName,
    type: 'input',
    message: 'Project name',
    validate: projectNameValidator,
  },
];

const getArgs = (): Args => {
  const parser = new argparse.ArgumentParser({
    version: process.env.npm_package_version,
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

  parser.addArgument([PROJECT_CHOICE.cmdName], {
    dest: PROJECT_CHOICE.inquirerName,
    choices: templateOptions,
    help: 'Which template to use.',
  });

  parser.addArgument([PROJECT_NAME.cmdName], {
    dest: PROJECT_NAME.inquirerName,
    help: 'The name of your project',
  });

  parser.addArgument(['--script_id'], {
    dest: 'scriptId',
    help:
      'Community Connector: Use this scriptId instead of creating a new script.',
  });

  const args = parser.parseArgs();
  Object.keys(args).forEach((key) => {
    if (args[key] === null) {
      delete args[key];
    }
  });
  return args;
};

const questionsWithArgs = async <T>(
  args: Args,
  questions: Array<Question<T>>
): Promise<Array<Question<T>>> => {
  await Promise.all(
    questions.map(async (question) => {
      const argValue = (args as any)[question.name!];
      if (argValue !== undefined && question.validate !== undefined) {
        const isValid = await question.validate(argValue);
        if (isValid !== true) {
          throw new Error(
            `Invalid response for ${question.name}: "${argValue}". ${isValid}`
          );
        }
      }
    })
  );
  return questions.filter((question) => {
    return (args as any)[question.name!] === undefined;
  });
};

export const getAnswers = async (): Promise<Answers> => {
  const args: Args = await getArgs();
  const questions = await questionsWithArgs(args, COMMON_QUESTIONS);
  const promptAnswers: CommonAnswers = await prompt(questions);
  const commonAnswers = Object.assign({}, promptAnswers, args);
  switch (commonAnswers.projectChoice) {
    case ProjectChoice.VIZ:
      return vizQuestions.getAnswers(args, commonAnswers);
    case ProjectChoice.CONNECTOR:
      return connectorQuestions.getAnswers(args, commonAnswers);
    default:
      throw new Error(`${commonAnswers.projectChoice} is not supported.`);
  }
};
