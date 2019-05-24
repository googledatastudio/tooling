import dotf = require('dotf');

export const claspAuthenticated = async (): Promise<boolean> => {
  const dotglobal = dotf.default('~', 'clasprc.json');
  return dotglobal.exists();
};
