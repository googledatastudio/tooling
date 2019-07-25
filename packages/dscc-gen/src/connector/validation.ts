import * as dotf from 'dotf';

export const claspAuthenticated = async (): Promise<boolean> => {
  const dotglobal = dotf('~', 'clasprc.json');
  return dotglobal.exists();
};
