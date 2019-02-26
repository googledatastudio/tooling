import * as inquirer from 'inquirer';
import {Answers, Args, CommonAnswers} from '../questions';
import * as validation from './validation';

export interface VizAnswers {
  devBucket: string;
  prodBucket: string;
  projectName: string;
}

const projectNameRegEx = /^([-_A-Za-z\d])+$/;

const projectNameValidator = (input: string) => {
  if (projectNameRegEx.test(input)) {
    return true;
  } else {
    return 'Name may only include letters, numbers, dashes, and underscores.';
  }
};

export const getAnswers = async (
  args: Args,
  commonAnswers: CommonAnswers
): Promise<Answers> => {
  await validation.checkGsutilInstalled();
  const vizAnswers: VizAnswers = await inquirer.prompt([
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
