# dscc-scripts

Scripts to simplify management of Data Studio developer features. The project is
primarily used by [dscc-gen].

## Usage

To use these scripts, add `@google/dscc-scripts` to your `package.json`.

```shell
npm install -D @google/dscc-scripts
```

or

```shell
yarn add -D @google/dscc-scripts
```

This will make `dscc-scripts` available to your npm scripts.

The scripts require your `package.json` to have some configuration.

### Viz

For viz, you need to add a `dsccViz` property.

```json
{
    ...,
    "dsccViz": {
        "gcsDevBucket": "{{DEV_BUCKET}}",
        "gcsProdBucket": "{{PROD_BUCKET}}",
        "jsFile": "index.js",
        "jsonFile": "index.json",
        "cssFile": "index.css",
        "print": "printMessage.js"
    }
    ...
}
```

The following scripts are available for viz.

+   `npm run dscc-scripts viz build -h`
+   `npm run dscc-scripts viz push -h`
+   `npm run dscc-scripts viz update_message -h`
+   `npm run dscc-scripts viz start -h`

### Connectors

For connectors, you need to add a `dsccConnector` property.

```json
{
  ...,
  "dsccConnector": {
    "production": "{{PRODUCTION_DEPLOYMENT_ID}}",
    "latest": "{{LATEST_DEPLOYMENT_ID}}"
  },
  ...
}
```

The following scripts are available for connectors.

+   `npm run dscc-scripts connector push_changes -h`
+   `npm run dscc-scripts connector watch_changes -h`
+   `npm run dscc-scripts connector open_script -h`
+   `npm run dscc-scripts connector try_production -h`
+   `npm run dscc-scripts connector try_latest -h`
+   `npm run dscc-scripts connector update_production -h`
+   `npm run dscc-scripts connector open_template -h`

[dscc-gen]: https://github.com/googledatastudio/tooling/packages/dscc-gen
