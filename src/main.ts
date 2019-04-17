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

import {ConnectorConfig, getConfig, ProjectChoice, VizConfig} from './config';
import * as connector from './connector/index';
import {assertNever} from './util';
import * as viz from './viz/index';

export interface Template {
  match: RegExp;
  replace: string;
}

export const main = async (basePath: string): Promise<number> => {
  const config = await getConfig();
  Object.assign(config, {basePath});

  switch (config.projectChoice) {
    case ProjectChoice.VIZ:
      return viz.createFromTemplate(config as VizConfig);
    case ProjectChoice.CONNECTOR:
      return connector.createFromTemplate(config as ConnectorConfig);
    default:
      return assertNever(config.projectChoice);
  }
};
