# Data Studio Community Visualization Local Development Template

Data Studio [community visualizations][community viz] allow you to write custom
JavaScript visualizations for [Google Data Studio][datastudio].

## About this template

This template provides
1. An opinionated template for developing community visualizations
2. A local development and feedback workflow
3. Build and deployment scripts

### Files included

To develop your visualization, you should be editing the files in the [./src]
directory.

| File       | Template location   | Documentation |
|------------|---------------------|------------------------|
| Manifest   | [src/manifest.json] | [manifest reference]   |
| Config     | [src/index.json]    | [config reference]     |
| JavaScript | [src/index.js]      | [write viz code]       |
| CSS        | [src/index.css]     | [write css code]       |

## Using this template

To create a new community visualization using this template, run the command

```bash
npx @google/dscc-gen
```

At the end of the setup flow, you will have a minimal working visualization and
have set GCS buckets for a dev and prod version.

### Writing the viz

1. Define the dimensions and metrics your visualization requires in
   `src/index.json`
2. Run the commands `npm run build:dev and; npm run push:dev` to build and
   deploy your visualization to your "dev" bucket.
3. [Create a new report][datastudio] and connect to the dataset you want to use
   for your sample message. I'd recommend using a subset of your data, to keep
   the size of the message small.
4. Use your "dev bucket" to add this visualization to your report. It will
   display div with the `data` returned by the [ds-component] helper library.
5. Copy the `data` in the visualization and replace the empty object in
   `src/localData.js`. This is the "local data" that you will develop with.


### Local development workflow

To develop locally:

1. Change `const LOCAL` to `true` in `src/index.js`.
2. Run `npm run start` to start a local server. A browser tab should open with
   the visualization you just deployed in Data Studio.
3. Make changes in `src/index.js` and `src/index.css`, save the changes, and see
   them reflected in the browser tab.

### Deployment workflow

You should have two deployments of your visualization: a "dev" version, where
[caching] is disabled and where you normally develop, and a "prod" version, where
caching is enabled and you only push "finished" visualizations.

Key commands:

Build the "dev" (devMode is true) visualization

```bash
npm run build:dev
```

Deploy the "dev" (devMode is true) visualization

```bash
npm run push:dev
```

Build the "prod" (devMode is false) visualization

```bash
npm run build:prod
```

Deploy the "prod" (devMode is false) visualization

```bash
npm run push:prod
```
## Scripts

The `build` and `deploy` scripts can be found in the [./scripts] directory.

[community viz]: http://developers.google.com/datastudio/visualization
[datastudio]: https://datastudio.google.com
[manifest reference]: https://http://developers.google.com/datastudio/visualization/manifest-reference
[config reference]: https://http://developers.google.com/datastudio/visualization/config-reference
[write viz code]: https://developers.google.com/datastudio/visualization/write-viz
[ds-component]: https://developers.google.com/datastudio/visualization/library-reference
[caching]: https://developers.google.com/datastudio/visualization/caching
