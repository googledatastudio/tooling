#!/bin/bash

set -e

if ! git branch | grep -q "^\* master\$"; then
  echo "You must be on the master branch to run this script"
  exit 1
fi

if test -n "$(git status --porcelain)"; then
  echo "You have local changes that haven't been accounted for."
  exit 1
fi

# Make sure local git is up-to-date.
set -x
git fetch --all
set +x
if test "$(git rev-parse HEAD)" != "$(git rev-parse origin/master)"; then
  echo "Your local branch is not in sync with origin/master."
  exit 1
fi

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
# Push the new version
git push origin master
