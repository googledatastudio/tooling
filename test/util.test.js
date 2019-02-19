/**
   Copyright 2018 Google LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
const util = require('../dist/util.js');
const fs = require('fs');
const {makeMocksFailOnCall} = require('./test-util.js');

jest.mock('fs');

beforeEach(() => {
  global.console.log = jest.fn();
  makeMocksFailOnCall(fs, 'fs');
});

test('writeFilePromise happy path', async () => {
  fs.writeFile.mockImplementation((path, data, encoding, cb) => {
    cb();
  });
  await util.writeFilePromise('filePath', 'data', 'utf8');
});

test('writeFilePromise sad path', async () => {
  fs.writeFile.mockImplementation((path, data, encoding, cb) => {
    cb('my error');
  });
  try {
    await util.writeFilePromise('filePath', 'data', 'utf8');
  } catch (e) {
    expect(e).toBe('my error');
  }
});

test('readFilePromise happy path', async () => {
  fs.readFile.mockImplementation((path, encoding, cb) => {
    cb(null, 'my happy data');
  });
  const actual = await util.readFilePromise('filePath', 'data', 'utf8');
  expect(actual).toBe('my happy data');
});

test('readFilePromise sad path', async () => {
  fs.readFile.mockImplementation((path, encoding, cb) => {
    cb('error happened');
  });
  try {
    await util.readFilePromise('filePath', 'data', 'utf8');
  } catch (e) {
    expect(e).toBe('error happened');
  }
});

test('execPromise with pipeStd', async () => {
  const options = {};
  const actual = await util.execPromise('echo "hi"', options, false);
  expect(actual).toEqual({out: 'hi\n', err: ''});
});

test('execPromise without pipeStd', async () => {
  const options = {};
  const actual = await util.execPromise('exit 0', options, true);
  expect(actual).toEqual({err: '', out: ''});
});

test('execPromise with error', async () => {
  const options = {};
  try {
    await util.execPromise('exit 1', options, true);
    fail();
  } catch (e) {
    expect(e.message).toBe('Command failed: exit 1\n');
  }
});
