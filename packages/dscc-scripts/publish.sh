#!/bin/bash
set -ex

# Install needed deps
yarn

yarn lint
echo

yarn prettier:check
echo

# Run tests
yarn test
# Delete old build files
rm -rf build
# Build code
yarn build
# Create a new version
yarn version
# Create a new publish token
npm login --registry https://wombat-dressing-room.appspot.com
# Publish new version to npm
npm publish --registry https://wombat-dressing-room.appspot.com
