import * as inquirer from 'inquirer';
import {setTimeout} from 'timers';
import * as analytics from './analytics';
import * as util from './util';

export const prompt = <T>(questions: inquirer.Questions<T>): Promise<T> => {
  const promptPromise: Promise<T> = inquirer.prompt(questions);
  // This is a hackey workaround until https://github.com/SBoudrias/Inquirer.js/issues/293 is fixed.
  const ui = (promptPromise as any).ui;
  const rl = ui.rl;
  // remove the original onForceClose listener.
  rl.removeListener('SIGINT', ui.onForceClose);
  rl.on('SIGINT', () => {
    analytics.trackEvent(
      analytics.Category.EXECUTION,
      analytics.Action.SIGINT_STOP
    );
    util.pause(200).then(() => {
      ui.onForceClose();
    });
  });
  return promptPromise;
};
