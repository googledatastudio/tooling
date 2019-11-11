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
import * as Ajv from "ajv";
import { configSchema, manifestSchema } from "./schemas";

export interface BuildValues {
  devBucket: string;
  prodBucket: string;
  manifestFile: "manifest.json";
  cssFile: string;
  jsonFile: string;
  jsFile: string;
  devMode: boolean;
  pwd: string;
  gcsBucket: string;
}

// Make the error more friendly than the default Ajv format.
const friendifyError = (error: Ajv.ErrorObject): string => {
  const pathPart = error.dataPath
    ? `The value at: ${error.dataPath} is invalid.`
    : "The value at the root is invalid.";
  return `${pathPart}. ${error.message}.`;
};

const unique = <T>(ts: T[]): T[] => [...new Set(ts)];

const validateWithSchema = (o: object, schema: object): string[] => {
  const ajv = new Ajv({ allErrors: true });
  const configValidator = ajv.compile(schema);
  const isValidConfig = configValidator(o);
  if (!isValidConfig) {
    const friendlyErrors = unique(
      (configValidator.errors || [])
        .map(friendifyError)
        // The error messages talking about `anyOf` aren't useful to most developers.
        .filter((s: string) => !s.includes("anyOf"))
    );
    return friendlyErrors;
  }
  return [];
};

// Validates that the provided object is a valid manifest. Return will be empty if there are no errors.
export const validateManifest = (manifest: object): string[] => {
  return validateWithSchema(manifest, manifestSchema);
};

// Validates that the provided object is a valid config. Return will be empty if there are no errors.
export const validateConfig = (config: object): string[] => {
  return validateWithSchema(config, configSchema);
};
