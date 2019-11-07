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
import * as argparse from 'argparse';
import {assertNever} from './util';

export enum ScriptChoice {
  CONNECTOR = 'connector',
  VIZ = 'viz',
}

export enum ConnectorScripts {
  PUSH_CHANGES = 'push_changes',
  WATCH_CHANGES = 'watch_changes',
  OPEN_SCRIPT = 'open_script',
  TRY_PRODUCTION = 'try_production',
  TRY_LATEST = 'try_latest',
  UPDATE_PRODUCTION = 'update_production',
  OPEN_TEMPLATE = 'open_template',
}

export interface ConnectorArgs {
  script: ConnectorScripts;
  forcePushChanges?: true;
}

const addConnectorParserDetails = (subparsers: argparse.SubParser) => {
  const connectorParser = subparsers.addParser(ScriptChoice.CONNECTOR, {
    addHelp: true,
    description: 'Scripts for managing Data Studio community connectors.',
  });

  const connectorSubparsers = connectorParser.addSubparsers({
    title: 'script',
    dest: 'script',
  });

  Object.values(ConnectorScripts).forEach((scriptName: ConnectorScripts) => {
    switch (scriptName) {
      case ConnectorScripts.PUSH_CHANGES:
        const pushChangesSubparser = connectorSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Push your local changes to Apps Script.',
        });
        pushChangesSubparser.addArgument(['-f', '--force'], {
          action: 'storeTrue',
          dest: 'forcePushChanges',
          help: 'Force changes to the manifest.',
          required: false,
        });
        break;
      case ConnectorScripts.WATCH_CHANGES:
        connectorSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Watch for local changes, and push them to Apps Script.',
        });
        break;
      case ConnectorScripts.OPEN_SCRIPT:
        connectorSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Open your Apps Script project in your browser.',
        });
        break;
      case ConnectorScripts.TRY_PRODUCTION:
        connectorSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Try the production deployment of your connector.',
        });
        break;
      case ConnectorScripts.TRY_LATEST:
        connectorSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Try the latest version of your connector.',
        });
        break;
      case ConnectorScripts.UPDATE_PRODUCTION:
        connectorSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Update the production deployment of your connector.',
        });
        break;
      case ConnectorScripts.OPEN_TEMPLATE:
        connectorSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Open the template for your connector.',
        });
        break;
      default:
        return assertNever(scriptName);
    }
  });
};

export enum VizScripts {
  START = 'start',
  BUILD = 'build',
  PUSH = 'push',
  UPDATE_MESSAGE = 'update_message',
  VALIDATE = 'validate',
}

export enum MessageFormat {
  OBJECT = 'object',
  TABLE = 'table',
}

export enum DeploymentChoices {
  PROD = 'prod',
  DEV = 'dev',
}

export interface VizArgs {
  script: VizScripts;
  deployment?: DeploymentChoices;
  format?: MessageFormat;
  configPath?: string;
  manifestPath?: string;
}
const addVizParserDetails = (subparsers: argparse.SubParser) => {
  const vizParser = subparsers.addParser(ScriptChoice.VIZ, {
    addHelp: true,
    description: 'Scripts for managing Viz.',
  });

  const vizSubparsers = vizParser.addSubparsers({
    title: 'script',
    dest: 'script',
  });

  let build: argparse.ArgumentParser;
  let push: argparse.ArgumentParser;
  let updateMessage: argparse.ArgumentParser;
  let validate: argparse.ArgumentParser;
  Object.values(VizScripts).forEach((scriptName: VizScripts) => {
    switch (scriptName) {
      case VizScripts.START:
        vizSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Run your viz locally with live-code reloading.',
        });
        break;
      case VizScripts.BUILD:
        build = vizSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Build your viz',
        });
        break;
      case VizScripts.PUSH:
        push = vizSubparsers.addParser(scriptName, {
          addHelp: true,
          description: 'Deploy your viz.',
        });
        break;
      case VizScripts.UPDATE_MESSAGE:
        updateMessage = vizSubparsers.addParser(scriptName, {
          addHelp: true,
          description:
            'Temporarily update your viz so you can copy example data from Data Studio.',
        });
        break;
      case VizScripts.VALIDATE:
        validate = vizSubparsers.addParser(scriptName, {
          addHelp: true,
          description: `Validate your viz's manifest & config files`,
        });
        break;
      default:
        return assertNever(scriptName);
    }
  });

  // Add common arguments to build & push.
  [build!, push!].forEach((parser) => {
    parser.addArgument(['-d', '--deployment'], {
      choices: [DeploymentChoices.PROD, DeploymentChoices.DEV],
      dest: 'deployment',
      help: 'Which deployment to deploy to.',
      required: false,
    });
  });

  updateMessage!.addArgument(['-f', '--format'], {
    choices: [MessageFormat.OBJECT, MessageFormat.TABLE],
    dest: 'format',
    help: 'The format for the data.',
    required: true,
  });

  validate!.addArgument(['--configPath'], {
    dest: 'configPath',
    help: 'The path to your config.json file.',
    required: false,
  });

  validate!.addArgument(['--manifestPath'], {
    dest: 'manifestPath',
    help: 'The path to your manifest.json file.',
    required: false,
  });
};

export const getParser = (): argparse.ArgumentParser => {
  const parser = new argparse.ArgumentParser({
    version: '1.0',
    addHelp: true,
    description:
      'Scripts for mananging Data Studio Developer feature projects.',
  });

  const subParsers = parser.addSubparsers({
    title: 'Script Choice',
    dest: 'scriptChoice',
  });

  addVizParserDetails(subParsers);
  addConnectorParserDetails(subParsers);

  return parser;
};
