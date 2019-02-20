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

import * as files from '../files';
import {Template} from '../main';
import {Answers} from '../questions';
import * as util from '../util';

export const checkGsutilInstalled = async (): Promise<boolean> => {
  try {
    await util.exec('which gsutil', {}, false);
  } catch (e) {
    console.error(
      '\nWARNING: gsutil is not installed, but is needed for the viz template. \
      Please follow installation instructions at \
      https://cloud.google.com/storage/docs/gsutil_install\nExiting template \
      creation, no files have been created.'
    );
    return false;
  }
  return true;
};

export const parseBucketName = (bucketPath: string): string | undefined => {
  return bucketPath.match(/(gs:\/\/[^/\s]+)/)[0];
};

export const hasBucketPermissions = async (
  gcsPath: string
): Promise<boolean | string> => {
  try {
    const gcsRootBucket = parseBucketName(gcsPath);
    await util.exec(`gsutil acl get ${gcsRootBucket}`, {}, false);
  } catch (e) {
    console.error(`\n${e.message}`);
    process.exit(1);
  }
  return true;
};
