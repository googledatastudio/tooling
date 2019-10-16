#!/bin/bash
set -ex

yarn lint
echo

yarn prettier:check
echo

# Install needed dependencies
yarn install
# Delete old build files
rm -rf _bundles
# Build code
yarn build
# Create a new version
yarn version
# Create a new publish token
npm login --registry https://wombat-dressing-room.appspot.com
# Publish new version to npm
npm publish --registry https://wombat-dressing-room.appspot.com
