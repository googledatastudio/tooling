#!/bin/bash

set -ex

yarn run build;

# Logout of clasp
npx @google/clasp logout
set +x
echo "Log into clasp with a test account, or you will pollute your Apps Scripts UI with a bunch of nonsense projects."
set -x
npx @google/clasp login

# Happy path for connector
./test/integration-tests-no-travis/connector_happy_path.exp
# Just check that it created a directory.
test -d ./my-connector
# Clean up created connector
rm -rf ./my-connector

# Happy path for viz
./test/integration-tests-no-travis/viz_happy_path.exp
# Just check that it created a directory.
test -d ./my-viz
# Clean up created connector
rm -rf ./my-viz
