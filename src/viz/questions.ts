import * as path from 'path';
import {PWD} from '../index';
import {prompt} from '../prompt';
import {Answers, Args, CommonAnswers} from '../questions';
import * as util from '../util';
import * as validation from './validation';

export interface VizAnswers {
  devBucket?: string;
  prodBucket?: string;
  projectName?: string;
}

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

export const getAnswers = async (
  args: Args,
  commonAnswers: CommonAnswers
): Promise<Answers> => {
  await validation.checkGsutilInstalled();
  const vizAnswers: VizAnswers = await prompt([
    {
      name: 'projectName',
      type: 'input',
      message: 'Project name',
      validate: projectNameValidator,
    },
    {
      name: 'devBucket',
      type: 'input',
      message: 'What is your dev bucket?',
      transformer: validation.addBucketPrefix,
      validate: async (a) =>
        await validation.hasBucketPermissions(validation.addBucketPrefix(a)),
    },
    {
      name: 'prodBucket',
      type: 'input',
      message: 'What is your prod bucket?',
      transformer: validation.addBucketPrefix,
      validate: async (a) =>
        await validation.hasBucketPermissions(validation.addBucketPrefix(a)),
    },
  ]);
  // TODO(me) - if the answers come from arguments, we don't want to add a
  // prefix. But we do want to validate it?
  vizAnswers.devBucket = validation.addBucketPrefix(vizAnswers.devBucket);
  vizAnswers.prodBucket = validation.addBucketPrefix(vizAnswers.prodBucket);

  return Object.assign({}, vizAnswers, commonAnswers, args);
};
