#!/bin/bash

set -ex

if ! git branch | grep -q "^\* main\$"; then
  echo "You must be on the main branch to run this script"
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
if test "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)"; then
  echo "Your local branch is not in sync with origin/main."
  exit 1
fi

set -x

# Publish ds-component
(cd packages/ds-component && ./publish.sh)

# Publish dscc-scripts
(cd packages/dscc-scripts && ./publish.sh)

# Publish dscc-gen
(cd packages/dscc-gen && ./publish.sh)

# Push the new version
git push
