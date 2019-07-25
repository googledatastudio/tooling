import * as bluebird from 'bluebird';
import Insight = require('insight');
import terminalLink from 'terminal-link';
import * as uuid4 from 'uuid/v4';
import {format} from './util';

const executionId = uuid4();
const packageName =
  process.env.npm_package_name !== undefined
    ? process.env.npm_package_name
    : 'this tool';

const insight = new Insight({
  // Google Analytics tracking code
  trackingCode: 'UA-41425441-15',
  pkg: {
    name: packageName,
  },
});
// Give enough time to actually read our link.
insight._permissionTimeout = 60 * 5;
const askPermission = bluebird.promisify(insight.askPermission, {
  context: insight,
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
    const name = format.blue(packageName);
    const link = format.green(
      terminalLink(
        'What we collect',
        'https://github.com/googledatastudio/dscc-gen#what-we-collect'
      )
    );
    const insightMessage = `May ${name} anonymously report usage statistics to improve over time? ${link}`;
    await askPermission(insightMessage);
  }
  return insight.optOut;
};
