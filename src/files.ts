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

import * as fs from 'mz/fs';
import * as path from 'path';
import * as listFiles from 'recursive-readdir';
import * as shelljs from 'shelljs';
import {Template} from './types';
import * as util from './util';
import * as rimraf from 'rimraf';

const ENCODING = 'utf8';
const CURR_DIR = process.cwd();

const fixFile = (templates: Template[]) => async (file: string) => {
  console.log(`Fixing file: ${file}`);
  const contents = await util.readFile(file, ENCODING);
  const newContents = templates.reduce(
    (acc, {match, replace}) => acc.replace(match, replace),
    contents
  );
  return util.writeFile(file, newContents, ENCODING);
};

export const fixTemplates = async (
  baseDirectory: string,
  templates: Template[]
): Promise<boolean> => {
  const filesToUpdate = await listFiles(baseDirectory, ['node_modules']);
  await Promise.all(filesToUpdate.map(fixFile(templates)));
  return true;
};

export const createDirectoryContents = async (
  templatePath: string,
  newProjectPath: string
) => {
  const filesToCreate: string[] = await util.readDir(templatePath);
  return Promise.all(
    filesToCreate.map(async (file) => {
      const originalFilePath = path.join(templatePath, file);
      const stats = await util.statSync(originalFilePath);
      if (stats.isFile()) {
        const contents = await util.readFile(originalFilePath, ENCODING);
        // npm renames .gitignore to .npmignore so rename it back to .gitignore.
        if (file === '.npmignore') {
          file = '.gitignore';
        }
        const writePath = path.join(CURR_DIR, newProjectPath, file);
        await util.writeFile(writePath, contents, ENCODING);
      } else if (stats.isDirectory()) {
        await mkdir(CURR_DIR, newProjectPath, file);
        const newTemplatePath = path.join(templatePath, file);
        const newNewProjectPath = path.join(newProjectPath, file);
        await createDirectoryContents(newTemplatePath, newNewProjectPath);
      } else {
        throw new Error(`${originalFilePath} is not a file or directory.`);
      }
    })
  );
};

export const parseJsonFile = async (filePath: string) => {
  try {
    const fileContents = await util.readFile(filePath, ENCODING);
    return JSON.parse(fileContents);
  } catch (e) {
    throw new Error(`Could not read: ${filePath}`);
  }
};

export interface PackageJson {
  version: string;
}

const createAndCopyFilesImpl = async (
  projectPath: string,
  templatePath: string,
  projectName: string
) => {
  try {
    await mkdir(projectPath);
  } catch (e) {
    throw new Error(`Couldn't create directory: ${projectPath}`);
  }
  try {
    await createDirectoryContents(templatePath, projectName);
  } catch (e) {
    throw new Error(`Couldn't copy over the template files to: ${projectPath}`);
  }
};

export const createAndCopyFiles = async (
  projectPath: string,
  templatePath: string,
  projectName: string
) =>
  await util.spinnify(
    'Creating directories and copying template files...',
    () => createAndCopyFilesImpl(projectPath, templatePath, projectName)
  );

export const remove = async (...directoryParts: string[]): Promise<boolean> => {
  if (directoryParts.length === 0) {
    throw new Error('You must pass directoryParts to this function');
  }
  const directory = path.join(...directoryParts);
  const directoryExists = await fs.exists(directory);
  if (!directoryExists) {
    throw new Error(`Directory: ${directory} does not exist`);
  }
  return new Promise((resolve, reject) => {
    rimraf(directory, (error) => {
      if (error !== null) {
        reject(error);
      }
      resolve(true);
    });
  });
};

export const mkdir = async (...directoryParts: string[]): Promise<boolean> => {
  if (directoryParts.length === 0) {
    throw new Error('You must pass directoryParts to this function');
  }
  const directory = path.join(...directoryParts);
  return fs.mkdir(directory).then(() => true);
};

export const cp = async (
  fromParts: string[],
  toParts: string[]
): Promise<boolean> => {
  const fromPath = path.join(...fromParts);
  const toPath = path.join(...toParts);
  const result = shelljs.cp('-r', fromPath, toPath);
  if (result.stderr !== null) {
    throw new Error(result.stderr);
  }
  return true;
};

export const mv = async (
  fromParts: string[],
  toDirParts: string[]
): Promise<boolean> => {
  const fromPath = path.join(...fromParts);
  const toPath = path.join(...toDirParts);
  // const result =
  shelljs.mv('', fromPath, toPath);
  // if (result.stderr !== null) {
  //   throw new Error(result.stderr);
  // }
  return true;
};

export const rename = async (
  fromParts: string[],
  toParts: string[]
): Promise<boolean> => {
  const fromPath = path.join(...fromParts);
  const toPath = path.join(...toParts);
  return fs.rename(fromPath, toPath).then(() => true);
};
