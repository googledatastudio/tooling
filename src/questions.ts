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
import * as inquirer from 'inquirer';
import * as files from './files';
import * as vizValidation from './viz/validation';

export interface Answers {
  [key: string]: string;
}

type QuestionGraphEntry = {
  name: string;
  needed: Array<(answers: Answers) => boolean>;
  type: string;
  message: string;
  validate?: (answer: string) => boolean | string | Promise<boolean | string>;
  choices?: string[];
  argumentName?: string;
  argumentHelp?: string;
  canBeArgument: boolean;
};

const projectNameRegEx = /^([-_A-Za-z\d])+$/;

const projectNameValidator = (input: string) => {
  if (projectNameRegEx.test(input)) {
    return true;
  } else {
    return 'Name may only include letters, numbers, dashes, and underscores.';
  }
};

const isCommunityViz = (answers: Answers): boolean =>
  answers['projectChoice'] === 'community-viz';

const isCommunityConnector = (answers: Answers): boolean =>
  answers['projectChoice'] === 'community-connector';

export const wrapInQuotes = (a: string) => '"' + a + '"';

const templateOptions = ['community-connector', 'community-viz'];

export const getArgsParser = async (
  baseDir: string,
  questionGraph: QuestionGraphEntry[]
) => {
  const parser = new argparse.ArgumentParser({
    version: (await files.getPackageJson(baseDir)).version,
    addHelp: true,
    description:
      'Template-based project generator for Data Studio developer features.',
  });

  questionGraph
    .filter(({canBeArgument}) => canBeArgument)
    .forEach(({argumentName, argumentHelp, name}) => {
      parser.addArgument([argumentName], {
        help: argumentHelp,
        dest: name,
      });
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

export const initialQuestionGraph: QuestionGraphEntry[] = [
  // Common Questions
  {
    name: 'projectChoice',
    needed: [],
    type: 'list',
    message: 'What project template would you like to use?',
    choices: [
      // 'community-connector',
      'community-viz',
    ],
    argumentName: '--project_choice',
    argumentHelp: `The name of your project. Choice are: [${templateOptions.map(
      wrapInQuotes
    )}]`,
    canBeArgument: true,
  },
  {
    name: 'projectName',
    type: 'input',
    message: 'Project name',
    validate: projectNameValidator,
    needed: [],
    argumentName: '--project_name',
    argumentHelp: 'The name of your project',
    canBeArgument: true,
  },
  // Viz Questions
  {
    needed: [isCommunityViz],
    name: 'devBucket',
    type: 'input',
    message: 'What is your dev bucket?',
    argumentName: '--dev_bucket',
    argumentHelp: 'Viz only: The developement bucket name',
    canBeArgument: true,
    validate: async (a) =>
      (await vizValidation.checkGsutilInstalled()) &&
      (await vizValidation.hasBucketPermissions(a)),
  },
  {
    needed: [isCommunityViz],
    name: 'prodBucket',
    type: 'input',
    message: 'What is your prod bucket?',
    argumentName: '--prod_bucket',
    argumentHelp: 'Viz only: The production bucket name',
    canBeArgument: true,
    validate: async (a) =>
      (await vizValidation.checkGsutilInstalled()) &&
      (await vizValidation.hasBucketPermissions(a)),
  },
  // Connector Questions
  {
    name: 'projectCreator',
    type: 'input',
    message: 'Project creator',
    needed: [isCommunityConnector],
    argumentName: '--project_creator',
    argumentHelp: 'Connector only: The person creating the connector',
    canBeArgument: true,
  },
];

const questionGraphToInquirer = (questions: QuestionGraphEntry[]) => {
  return questions.map(({name, type, message, choices, validate}) => ({
    name,
    type,
    message,
    choices,
    validate,
  }));
};

export const getAllAnswersHelper = async (
  questionGraph: any,
  answers: Answers
): Promise<Answers> => {
  let answerableQuestions: QuestionGraphEntry[] = questionGraph
    .filter(
      (graphEntry: QuestionGraphEntry) => answers[graphEntry.name] === undefined
    )
    .filter((graphEntry: QuestionGraphEntry) =>
      graphEntry.needed.every((p) => p(answers))
    );
  if (answerableQuestions.length > 0) {
    let moreAnswers = await inquirer.prompt(
      questionGraphToInquirer(answerableQuestions)
    );
    return await getAllAnswersHelper(
      questionGraph,
      Object.assign({}, answers, moreAnswers)
    );
  } else {
    return answers;
  }
};

const validateArgs = async (args: any): Promise<boolean[]> => {
  const validations = Object.keys(args).map(async (key) => {
    const graphNode = initialQuestionGraph.find(
      (graphEntry) => graphEntry.name === key
    );
    if (graphNode && graphNode.validate) {
      const validation = await graphNode.validate(args[key]);
      if (validation !== true) {
        console.error(`Invalid value for ${key}. ${validation}`);
        process.exit(1);
      }
    } else {
      return true;
    }
  });
  return await Promise.all(validations);
};

export const getAllAnswers = async (basePath: string): Promise<Answers> => {
  const args = (await getArgsParser(
    basePath,
    initialQuestionGraph
  )).parseArgs();
  // Get rid of `null` values so `Object.assign` works correctly.
  Object.keys(args).forEach((key) => args[key] == null && delete args[key]);
  await validateArgs(args);
  return await getAllAnswersHelper(initialQuestionGraph, args);
};
