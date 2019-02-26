import * as uuid4 from 'uuid/v4';
const Insight = require('insight');
const pkg = require('../package.json');

const executionId = uuid4();

export const insight = new Insight({
  // Google Analytics tracking code
  trackingCode: 'UA-41425441-15',
  pkg,
});

export enum Category {
  EXECUTION = 'execution',
}

export enum Action {
  START = 'start',
  STOP = 'stop',
  ERROR_STOP = 'error_stop',
  GSUTIL_NOT_INSTALLED = 'gsutil_not_installed',
  SIGINT_STOP = 'sigint_stop',
}

export const trackEvent = (category: Category, action: Action) => {
  insight.trackEvent({
    category,
    action,
    label: executionId,
  });
};

export const checkForOptOut = async () => {
  if (insight.optOut === undefined) {
    await new Promise((resolve, reject) => {
      insight.askPermission(null, (err: any, success: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(success);
        }
      });
    });
  }
  return insight.optOut;
};
