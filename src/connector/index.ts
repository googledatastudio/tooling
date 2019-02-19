/**
   Copyright 2018 Google LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import {Spinner} from 'cli-spinner';
import {Template} from '../main';
import {Answers} from '../questions';
import * as files from '../files';
import * as util from '../util';
import * as appsscript from './appsscript';

const createAppsScriptProject = async (
  appsScriptPath: string,
  projectName: string
) => {
  let couldAuth = true;
  try {
    const isAuth = await appsscript.isAuthenticated();
    if (!isAuth) {
      couldAuth = await appsscript.authenticate();
    }
  } catch (e) {
    throw new Error('Could not check if the user was authenticated.');
  }
  if (!couldAuth) {
    throw new Error('Could not be authenticated.');
  }
  // TODO(mjhamrick) - see if there is a way to check if a user is already
  // logged in with clasp.
  const spinner = new Spinner('Creating Apps Script Project...');
  spinner.start();
  try {
    await appsscript.create(appsScriptPath, projectName);
  } catch (e) {
    spinner.stop(true);
    throw new Error('The appsscript project could not be created.');
  }
  try {
    const scriptId = await appsscript.getScriptId(appsScriptPath);
    spinner.stop();
    return scriptId;
  } catch (e) {
    spinner.stop(true);
    throw new Error('The scriptId could not be obtained.');
  }
};

const push = async (appsScriptPath: string) => {
  const spinner = new Spinner(
    `Pushing files and creating an initial version...`
  );
  spinner.start();
  try {
    await appsscript.push(appsScriptPath);
  } catch (e) {
    spinner.stop(true);
    throw new Error('The files could not be synced with Apps Script.');
  }
  try {
    await appsscript.version(appsScriptPath);
    spinner.stop();
  } catch (e) {
    spinner.stop(true);
    throw new Error('Could not create a new version.');
  }
};

const deploy = async (appsScriptPath: string, deploymentName: string) => {
  try {
    const deploymentId = await appsscript.deploy(
      appsScriptPath,
      '1',
      deploymentName
    );
    return deploymentId;
  } catch (e) {
    throw new Error(`Could not deploy to ${deploymentName}.`);
  }
};

export const projectBuildThings = async (
  projectPath: string,
  projectAnswers: Answers
) => {
  const {yarn, npm} = projectAnswers;
  try {
    if (yarn) {
      await util.exec(`yarn install`, {cwd: projectPath}, false);
    } else {
      await util.exec(`npm install`, {cwd: projectPath}, false);
    }
  } catch (e) {
    if (yarn) {
      throw new Error(`yarn install failed.`);
    } else {
      throw new Error(`npm install failed.`);
    }
  }
};

export const getDeploymentIdByName = async (
  appsscriptPath: string,
  deploymentName: string
) => {
  try {
    return await appsscript.getDeploymentIdByName(
      appsscriptPath,
      deploymentName
    );
  } catch (e) {
    throw new Error(`Could not get the deploymentId for ${deploymentName}.`);
  }
};

export const createFromTemplate = async (answers: Answers): Promise<void> => {
  console.error('Connectors are not currently supported.');
  //   const templateValues = await impl.getUserAnswers(basePath);
  //   const {
  //     projectChoice,
  //     projectName,
  //     projectCreator,
  //     yarn,
  //     npm,
  //   } = templateValues;
  //   const templatePath = path.join(basePath, 'templates', projectChoice);
  //   const projectPath = path.join(pwd, projectName);
  //   const appsScriptPath = path.join(projectPath, 'src');
  //   await impl.createAndCopyFiles(projectPath, templatePath, projectName);
  //   const scriptId = await impl.createAppsScriptProject(
  //     appsScriptPath,
  //     projectName
  //   );
  //   const scriptUrl: string = `https://script.google.com/d/${scriptId}/edit`;
  //   templateValues['scriptId'] = scriptId;
  //   let templates: Template[] = [
  //     {match: /{{PROJECT_NAME}}/g, replace: projectName},
  //     {match: /{{PROJECT_CREATOR}}/g, replace: projectCreator},
  //     {match: /{{SCRIPT_ID}}/g, replace: scriptId},
  //   ];
  //   await files.fixTemplates(projectPath, templates);
  //   await impl.push(appsScriptPath);
  //   // Create an integration & production deployment, get the head deploymentId,
  //   // and do an npm install in parallel.
  //   let spinner = new Spinner(`Creating initial deployments...`);
  //   spinner.start();
  //   const [
  //     integrationDeploymentId,
  //     productionDeploymentId,
  //     headDeploymentId,
  //   ] = await Promise.all([
  //     impl.deploy(appsScriptPath, 'integration'),
  //     impl.deploy(appsScriptPath, 'production'),
  //     impl.getDeploymentIdByName(appsScriptPath, 'HEAD'),
  //   ]);
  //   spinner.stop(true);
  //   templates.push({
  //     match: /{{PRODUCTION_DEPLOYMENT_ID}}/,
  //     replace: productionDeploymentId,
  //   });
  //   templates.push({
  //     match: /{{INTEGRATION_DEPLOYMENT_ID}}/,
  //     replace: integrationDeploymentId,
  //   });
  //   templates.push({
  //     match: /{{HEAD_DEPLOYMENT_ID}}/,
  //     replace: headDeploymentId,
  //   });
  //   await files.fixTemplates(projectPath, templates);
  //   spinner = new Spinner(`Running ${yarn ? 'yarn' : 'npm'} install...`);
  //   spinner.start();
  //   await impl.projectBuildThings(projectPath, templateValues);
  //   spinner.stop(true);
  //   const integrationDeploymentUrl = `https://datastudio.google.com/datasources/create?connectorId=${integrationDeploymentId}`;
  //   const productionDeploymentUrl = `https://datastudio.google.com/datasources/create?connectorId=${productionDeploymentId}`;
  //   const headDeploymentUrl = `https://datastudio.google.com/datasources/create?connectorId=${headDeploymentId}`;
  //   const cjsPath = path.join(projectName, 'src', 'Connector.js');
  //   const sjsPath = path.join(projectName, 'src', 'schema.js');
  //   console.log(`\
  // Project created sucessfully!\n\
  // Apps Script project:    ${scriptUrl}\n\
  // Integration deployment: ${integrationDeploymentUrl}\n\
  // Production deployment:  ${productionDeploymentUrl}\n\
  // Head deployment:        ${headDeploymentUrl}
  // Start by editing: ${cjsPath} and ${sjsPath}\
  // `);
};
