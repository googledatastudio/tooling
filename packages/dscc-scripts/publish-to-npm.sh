#!/bin/bash

# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https:/www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

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

set -x
# Install needed dependencies
yarn install
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
# Push the new version
git push
