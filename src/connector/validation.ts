import * as util from '../util';
const dotf = require('dotf');

export const claspAuthenticated = async (): Promise<boolean> => {
  const dotglobal = dotf('~', 'clasprc.json');
  return await dotglobal.exists();
};
