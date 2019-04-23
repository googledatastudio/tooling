import * as execa from 'execa';
import * as path from 'path';

beforeAll(async () => {
  await execa('npm', ['run', 'build']);
});

test('viz bad dev bucket', async () => {
  expect(
    execa('node', [
      path.resolve('build', 'index.js'),
      'viz',
      '-d',
      'bucket/doubleTrailingSlash//',
    ])
  ).rejects.toThrow('invalid gcs bucket name');
});

test('viz bad prod bucket', async () => {
  expect(
    execa('node', [
      path.resolve('build', 'index.js'),
      'viz',
      '-p',
      'bucket/doubleTrailingSlash//',
    ])
  ).rejects.toThrow('invalid gcs bucket name');
});
