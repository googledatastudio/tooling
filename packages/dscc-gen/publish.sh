#!/bin/bash
set -e

echo "Checking linting..."
if ! yarn lint > /dev/null 2>&1; then
  echo "Linting failed, fix any lint problems before deploying another build."
  exit 1
fi

echo "Checking prettier..."
if ! yarn prettier:check > /dev/null 2>&1; then
  echo "Prettier failed. Run prettier before deploying another build."
  exit 1
fi

set -x
# Install needed dependencies
yarn
# Double check all tests work
yarn travis
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
