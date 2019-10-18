<h1 align="center">
  <br>
  tooling
  <br>
</h1>

<p align="center"><a href="https://www.npmjs.com/package/@google/dscc-gen"><img src="https://img.shields.io/npm/v/@google/dscc-gen.svg" alt="npm Version"></a> <a href="https://npmcharts.com/compare/@google/dscc-gen?minimal=true"><img src="https://img.shields.io/npm/dw/@google/dscc-gen.svg" alt="npm Downloads"></a> <a href="http://packagequality.com/#?package=%40google%2Fdscc-gen"><img src="http://npm.packagequality.com/shield/%40google%2Fdscc-gen.svg" alt="Package Quality"></a> <a href="https://github.com/google/clasp"><img src="https://img.shields.io/badge/built%20with-clasp-4285f4.svg" alt="Built with Clasp"></a></p>

Tooling for [Data Studio Developer Features]

## What's in this repo

[ds-component]:
+ A helper library for [community visualization] development.

[dscc-scripts]:
+ Scripts to simplify deployment of Data Studio developer projects.

[dscc-gen]:
+ An opinionated templating tool to bootstrap community connectors or community visualizations.

Review the README for each package to learn more.

## Developer notes
- The top-level `package.json` and `yarn.lock` exist to make sure that yarn is
  available in our travis environment.

[Data Studio Developer Features]: https://developers.google.com/datastudio/
[ds-component]: ./packages/ds-component/
[dscc-scripts]: ./packages/dscc-scripts/
[dscc-gen]: ./packages/dscc-gen/
[community visualization]: https://developers.google.com/datastudio/visualization
