import * as path from 'path';

export const PWD = process.cwd();
// tslint:disable-next-line
export const packageJSON = require(path.join(__dirname, '..', 'package.json'));
