#!/bin/bash

# Make sure local git is up-to-date.
git fetch -a
if [[ $(git rev-parse HEAD) != $(git rev-parse origin/master) ]]; then
  echo "Your local branch is not in sync with origin/master."
  exit 1
fi
# Install needed dependencies
yarn install
# Build code
yarn build
# Create a new version
yarn version
# Create a new publish token
npm login --registry https://wombat-dressing-room.appspot.com
# Publish new version to npm
npm publish --registry https://wombat-dressing-room.appspot.com
# Push the new version
git push
