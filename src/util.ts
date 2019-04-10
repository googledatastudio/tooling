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

import * as bb from 'bluebird';
import chalk from 'chalk';
import * as cp from 'child_process';
import {ExecOptions} from 'child_process';
import {Spinner} from 'cli-spinner';
import * as fs from 'fs';
import {Answers} from 'inquirer';

export const readDir = (path: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, data) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export const readFile = (
  filePath: string,
  encoding: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export const makeDir = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.mkdir(filePath, (err) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(filePath);
      }
    });
  });
};

export const writeFile = (
  filePath: string,
  data: string,
  encoding: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, encoding, (err) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

export const statSync = bb.promisify(fs.stat);

export const fileExists = (filePath: string): Promise<boolean> => {
  return new Promise((resolve, _) => {
    // The callback version (fs.exists) is deprecated so using synchronous
    // version (that isn't).
    const exists = fs.existsSync(filePath);
    resolve(exists);
  });
};

export interface Std {
  out: string;
  err: string;
}

export const exec = (
  command: string,
  options: ExecOptions,
  pipeStd?: boolean
): Promise<Std> => {
  return new Promise((resolve, reject) => {
    const child = cp.exec(
      command,
      options,
      (err, stdout: string, stderr: string) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve({out: stdout, err: stderr});
        }
      }
    );
    if (pipeStd !== undefined && pipeStd) {
      if (child.stdout !== null && child.stderr !== null) {
        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);
      }
    }
  });
};

export const npmInstall = async (
  projectPath: string,
  answers: Answers
): Promise<Std> => {
  const execOptions = {cwd: projectPath};
  if (answers.yarn) {
    return exec('yarn install', execOptions, false);
  } else {
    return exec('npm install', execOptions, false);
  }
};

export const pause = async (millis: number): Promise<void> => {
  return new Promise((resolve, _) => {
    setInterval(() => {
      resolve();
    }, millis);
  });
};

export const spinnify = async <T>(
  spinnerText: string,
  fn: () => Promise<T>
): Promise<T> => {
  const spinner = new Spinner(spinnerText);
  spinner.start();
  try {
    return await fn();
  } finally {
    spinner.stop(true);
  }
};

export const format = {
  green: chalk.bold.rgb(15, 157, 88),
  blue: chalk.bold.rgb(66, 133, 244),
  yellow: chalk.bold.rgb(244, 160, 0),
  red: chalk.bold.rgb(219, 68, 55),
};
