import * as sut from '../../src/viz/validation';

test('parseBucketName_topLevelBucket', () => {
  const actual = sut.parseBucketName('gs://bucketName');
  expect(actual).toEqual('gs://bucketName');
});

test('parseBucketName_bucketWithChildDirectories', () => {
  const actual = sut.parseBucketName('gs://bucketName/childPart');
  expect(actual).toEqual('gs://bucketName');
});

test('parseBucketName_bucketWithMultipleChildDirectories', () => {
  const actual = sut.parseBucketName(
    'gs://bucketName/childPart/secondChildPart'
  );
  expect(actual).toEqual('gs://bucketName');
});
