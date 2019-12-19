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

import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import * as shelljs from 'shelljs';
import {Template} from './types';
import * as util from './util';

const ENCODING = 'utf8';
const CURR_DIR = process.cwd();

const fixFile = (templates: Template[]) => async (file: string) => {
  const contents = util.readFile(file, ENCODING);
  const newContents = templates.reduce(
    (acc, {match, replace}) => acc.replace(match, replace),
    contents
  );
  return util.writeFile(file, newContents, ENCODING);
};

export const listFiles = (
  baseDirectory: string,
  toIgnore: string | null
): string[] => {
  const dirContents = fs.readdirSync(baseDirectory, {withFileTypes: true});
  const files: string[][] = dirContents.map((item) => {
    const itemPath: string = path.resolve(baseDirectory, item.name);
    return item.isDirectory() ? listFiles(itemPath, toIgnore) : [itemPath];
  });
  return files.reduce((acc, fileNames) => {
    if (toIgnore != null) {
      return acc.concat(fileNames).filter((el) => !el.includes(toIgnore));
    } else {
      return acc.concat(fileNames);
    }
  }, []);
};

export const recursiveReaddirSync = async (
  baseDirectory: string
): Promise<string[]> => {
  const dirContents = fs.readdirSync(baseDirectory, {withFileTypes: true});
  const files: string[][] = await Promise.all(
    dirContents.map(async (item) => {
      const itemPath: string = path.resolve(baseDirectory, item.name);
      return item.isDirectory()
        ? await recursiveReaddirSync(itemPath)
        : [itemPath];
    })
  );
  return files.reduce((acc, fileNames) => {
    return acc.concat(fileNames);
  }, []);
};

export const fixTemplates = async (
  baseDirectory: string,
  templates: Template[]
): Promise<boolean> => {
  const filesToUpdate = listFiles(baseDirectory, 'node_modules');
  await Promise.all(filesToUpdate.map(fixFile(templates)));
  return true;
};

export const createDirectoryContents = async (
  templatePath: string,
  newProjectPath: string
) => {
  const filesToCreate: string[] = util.readDir(templatePath);
  return Promise.all(
    filesToCreate.map(async (file) => {
      const originalFilePath = path.join(templatePath, file);
      const stats = fs.statSync(originalFilePath);
      if (stats.isFile()) {
        const contents = util.readFile(originalFilePath, ENCODING);
        // npm renames .gitignore to .npmignore so rename it back to .gitignore.
        if (file === '.npmignore') {
          file = '.gitignore';
        }
        const writePath = path.join(CURR_DIR, newProjectPath, file);
        util.writeFile(writePath, contents, ENCODING);
      } else if (stats.isDirectory()) {
        mkdir(CURR_DIR, newProjectPath, file);
        const newTemplatePath = path.join(templatePath, file);
        const newNewProjectPath = path.join(newProjectPath, file);
        createDirectoryContents(newTemplatePath, newNewProjectPath);
      } else {
        throw new Error(`${originalFilePath} is not a file or directory.`);
      }
    })
  );
};

export const parseJsonFile = (filePath: string) => {
  try {
    const fileContents = util.readFile(filePath, ENCODING);
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
    mkdir(projectName);
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

export const remove = (...directoryParts: string[]): boolean => {
  if (directoryParts.length === 0) {
    throw new Error('You must pass directoryParts to this function');
  }
  const directory = path.join(...directoryParts);
  try {
    const stats = fs.statSync(directory);
    if (stats.isDirectory()) {
      rimraf.sync(directory);
    } else {
      fs.unlinkSync(directory);
    }
  } catch (err) {
    throw new Error(`Unable to remove ${directory}`);
  }
  return true;
};

export const mkdir = (...directoryParts: string[]): boolean => {
  if (directoryParts.length === 0) {
    throw new Error('You must pass directoryParts to this function');
  }
  const directory = path.join(...directoryParts);
  try {
    fs.mkdirSync(directory, {recursive: true});
  } catch (err) {
    throw Error(err);
  }
  return true;
};

export const cp = (fromParts: string[], toParts: string[]): boolean => {
  const fromPath = path.join(...fromParts);
  const toPath = path.join(...toParts);
  const result = shelljs.cp('-r', fromPath, toPath);
  if (result.stderr !== null) {
    throw new Error(result.stderr);
  }
  return true;
};

export const mv = (fromParts: string[], toDirParts: string[]): boolean => {
  const fromPath = path.join(...fromParts);
  const toPath = path.join(...toDirParts);
  const result = shelljs.mv('-f', fromPath, toPath);
  if (!fs.existsSync(toPath)) {
    if (result.stderr !== null) {
      throw new Error(result.stderr);
    } else {
      throw new Error(`Moving ${fromPath} to ${toPath} failed`);
    }
  }
  return true;
};

export const rename = (fromParts: string[], toParts: string[]): boolean => {
  const fromPath = path.join(...fromParts);
  const toPath = path.join(...toParts);
  try {
    fs.renameSync(fromPath, toPath);
  } catch (err) {
    throw new Error(err);
  }
  return true;
};
