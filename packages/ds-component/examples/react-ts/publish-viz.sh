#!/bin/bash

echo "Removing previous artifacts"
rm -rf build
rm -rf deploy

echo "Building the production code for viz"
yarn build

mkdir deploy

cp ./build/static/js/*.js deploy/react-ts.js
cp ./src/manifest.json deploy/manifest.json
cp ./src/react-ts.json deploy/react-ts.json

gsutil cp -a public-read deploy/* "gs://public-community-viz-showcase-reports/mattTest"
