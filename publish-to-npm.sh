#!/bin/bash

# Make sure local git is up-to-date.
COMMIT_DIFF_NUMBER=$(git rev-list HEAD...origin/master --count)
if [[ $COMMIT_DIFF_NUMBER != 0 ]]; then
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
