import * as analytics from './analytics';
import * as inquirer from 'inquirer';

export const prompt = <T>(questions: inquirer.Questions<T>): Promise<T> => {
  const promptPromise: Promise<T> = inquirer.prompt(questions);
  // This is a hackey workaround until https://github.com/SBoudrias/Inquirer.js/issues/293 is fixed.
  (promptPromise as any).ui.rl.on('SIGINT', () => {
    analytics.trackEvent(
      analytics.Category.EXECUTION,
      analytics.Action.SIGINT_STOP
    );
  });
  return promptPromise;
};
