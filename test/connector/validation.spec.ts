/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as fs from 'fs';
import * as sut from '../../src/connector/validation';
import * as path from 'path';
import * as os from 'os';

const claspPath = path.resolve(os.homedir(), '.clasprc.json');
const claspBakPath = path.resolve(os.homedir(), '.clasprc.json.bak');

const touch = (filename: string) => {
  fs.closeSync(fs.openSync(filename, 'w'));
};

const rm = (filename: string) => {
  fs.unlinkSync(filename);
};

beforeEach(async () => {
  // create an empty .clasprc.json if it doesn't exist
  if (!fs.existsSync(claspPath)) {
    touch(claspPath);
  }
  // copy any existing claspFile to the back updirectory
  fs.copyFileSync(claspPath, claspBakPath);
});

afterEach(async () => {
  fs.copyFileSync(claspBakPath, claspPath);
  rm(claspBakPath);
});

describe('claspAuthenticated', () => {
  test('returns true when .clasp.json exists.', async () => {
    const actual = await sut.claspAuthenticated();
    expect(actual).toBe(true);
  });
  test('returns false when .clasp.json does not exist.', async () => {
    rm(claspPath);
    const actual = await sut.claspAuthenticated();
    expect(actual).toBe(false);
  });
});
