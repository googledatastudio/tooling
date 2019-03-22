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
import {Template} from './main';
import * as util from './util';

const ENCODING = 'utf8';
const CURR_DIR = process.cwd();

export const fixTemplates = async (
  baseDirectory: string,
  templates: Template[]
) => {
  const filesToUpdate = await util.readDir(baseDirectory);
  return Promise.all(
    filesToUpdate.map(async (file) => {
      const originalFilePath = path.join(baseDirectory, file);
      const stats = await util.statSync(originalFilePath);
      if (stats.isFile()) {
        const contents = await util.readFile(originalFilePath, ENCODING);
        const newContents = templates.reduce(
          (acc, {match, replace}) => acc.replace(match, replace),
          contents
        );
        await util.writeFile(originalFilePath, newContents, ENCODING);
      } else if (stats.isDirectory()) {
        const newBaseDirectory = path.join(baseDirectory, file);
        await fixTemplates(newBaseDirectory, templates);
      } else {
        throw new Error(`${originalFilePath} is not a file or directory.`);
      }
    })
  );
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
        await util.makeDir(path.join(CURR_DIR, newProjectPath, file));
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

export const getPackageJson = async (packageDir: string) => {
  const json = await parseJsonFile(path.join(packageDir, 'package.json'));
  const parsed: PackageJson = json;
  return parsed;
};

const createAndCopyFilesImpl = async (
  projectPath: string,
  templatePath: string,
  projectName: string
) => {
  try {
    await util.makeDir(projectPath);
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
