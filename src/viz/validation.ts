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

import * as execa from 'execa';
import terminalLink from 'terminal-link';
import * as analytics from '../analytics';
import {Action, Category} from '../analytics';
import {format} from '../util';

export const addBucketPrefix = (bucket: string) =>
  bucket.startsWith('gs://') ? bucket : `gs://${bucket}`;

export const checkGsutilInstalled = async (): Promise<boolean> => {
  try {
    await execa('which', ['gsutil']);
  } catch (e) {
    analytics.trackEvent(Category.EXECUTION, Action.GSUTIL_NOT_INSTALLED);

    const error = format.red.bold('ERROR');
    const gsutil = format.blue('gsutil');
    const gsutilInstall = format.yellow(
      terminalLink(
        'Install gsutil',
        'https://cloud.google.com/storage/docs/gsutil_install'
      )
    );

    const errorString = `\
${error}: ${gsutil} is not installed, but is needed for the viz template.\n\
${gsutilInstall}, then re-run this command to continue.\n\
No files have been created.
`;
    throw new Error(errorString);
  }
  return true;
};

export const parseBucketName = (bucketPath: string): string | undefined => {
  const matches = bucketPath.match(/(gs:\/\/[-a-zA-Z]+)\/?([-a-zA-Z]+\/?)*$/);
  if (matches === null) {
    return undefined;
  }
  return matches[1];
};

export const hasBucketPermissions = async (
  gcsPath: string
): Promise<boolean | string> => {
  const gcsRootBucket = parseBucketName(gcsPath);
  if (gcsRootBucket === undefined) {
    throw new Error(`${gcsPath} is an invalid gcs bucket name.`);
  }
  await execa(`gsutil`, ['acl', 'get', gcsRootBucket]);
  return true;
};
