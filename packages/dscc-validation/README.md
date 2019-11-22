# dscc-scripts

Scripts to validate files for Data Studio Community Visualizations. The project is
primarily used by [dscc-scripts].


<p align="center"><a href="https://www.npmjs.com/package/@google/dscc-gen"><img src="https://img.shields.io/npm/v/@google/dscc-gen.svg" alt="npm Version"></a> <a href="https://npmcharts.com/compare/@google/dscc-validation?minimal=true"><img src="https://img.shields.io/npm/dw/@google/dscc-gen.svg" alt="npm Downloads"></a> <a href="http://packagequality.com/#?package=%40google%2Fdscc-validation"><img src="http://npm.packagequality.com/shield/%40google%2Fdscc-validation.svg" alt="Package Quality"></a> </p>

## Usage

To use these scripts, add `@google/dscc-validation` to your `package.json`.

```shell
npm install -D @google/dscc-validation
```

or

```shell
yarn add -D @google/dscc-validation
```

This will make `dscc-validation` available to your npm scripts.

Sample usage: (Typescript)

```
import * as validate from '@google/dscc-validation';

// to validate a manifest JSON
validate.validateManifest(JSON.parse(manifestString));

// to validate a config
validate.validateConfig(configString);


```


[dscc-scripts]: ../dscc-scripts
