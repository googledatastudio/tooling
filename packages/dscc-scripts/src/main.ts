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
import * as parser from './args';
import {ConnectorArgs, ScriptChoice, VizArgs} from './args';
import {main as connectorMain} from './connector';
import {assertNever} from './util';
import {main as vizMain} from './viz';

export const main = async () => {
  const args = parser.getParser().parseArgs();
  const scriptChoice: ScriptChoice = args.scriptChoice as ScriptChoice;
  switch (scriptChoice) {
    case ScriptChoice.CONNECTOR:
      return connectorMain(args as ConnectorArgs);
    case ScriptChoice.VIZ:
      return vizMain(args as VizArgs);
    default:
      return assertNever(scriptChoice);
  }
};
