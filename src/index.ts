#!/usr/bin/env node
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

import * as path from 'path';
import * as analytics from './analytics';
import {Action, Category} from './analytics';
import {main} from './main';
import * as util from './util';

export const PWD = process.cwd();

(async (): Promise<number> => {
  await analytics.checkForOptOut();
  analytics.trackEvent(Category.EXECUTION, Action.START);
  let result: number;
  try {
    result = await main(path.join(__dirname, '..'));
  } catch (e) {
    analytics.trackEvent(Category.EXECUTION, Action.ERROR_STOP);
    console.log(e.message);
    return 1;
  }
  analytics.trackEvent(Category.EXECUTION, Action.STOP);
  return result;
})().then(async (code) => {
  await util.pause(200);
  process.exit(code);
});
