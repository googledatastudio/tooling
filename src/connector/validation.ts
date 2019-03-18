import dotf = require('dotf');
import * as util from '../util';

export const claspAuthenticated = async (): Promise<boolean> => {
  const dotglobal = dotf('~', 'clasprc.json');
  return dotglobal.exists();
};
