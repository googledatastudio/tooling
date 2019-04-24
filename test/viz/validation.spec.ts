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
import * as sut from '../../src/viz/validation';

test('parseBucketName top-level bucket w/ no trailing slash is parsed correctly.', () => {
  const actual = sut.parseBucketName('gs://bucketName');
  expect(actual).toEqual('gs://bucketName');
});

test('parseBucketName bucket w/ child directory is parsed correctly.', () => {
  const actual = sut.parseBucketName('gs://bucketName/childPart');
  expect(actual).toEqual('gs://bucketName');
});

test('parseBucketName bucket w/ multiple child directories is parsed correctly.', () => {
  const actual = sut.parseBucketName(
    'gs://bucketName/childPart/secondChildPart'
  );
  expect(actual).toEqual('gs://bucketName');
});

test('parseBucketName extra slashes are considered invalid.', () => {
  expect(() => sut.parseBucketName('gs://bucketName//')).toThrow(
    'invalid gcs bucket name'
  );
});

test('parseBucketName very long invalid path can be parsed quickly.', async () => {
  expect(() =>
    sut.parseBucketName(
      'gs://bucketName/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa//aaaaaaaaaa/'
    )
  ).toThrow('invalid gcs bucket name');
}, 1000);

test('parseBucketName double slashes are considered invalid.', () => {
  expect(() => sut.parseBucketName('gs://bucketName/test1//hi')).toThrow(
    'invalid gcs bucket name'
  );
});

test('addBucketPrefix adds prefix when no prefix is present.', () => {
  const actual = sut.addBucketPrefix('my-bucket-name');
  expect(actual.startsWith('gs://')).toEqual(true);
  expect(actual).toEqual('gs://my-bucket-name');
});

test('addBucketPrefix does nothing when a prefix is already present.', () => {
  const actual = sut.addBucketPrefix('gs://my-bucket-name');
  expect(actual.startsWith('gs://')).toEqual(true);
  expect(actual).toEqual('gs://my-bucket-name');
});
