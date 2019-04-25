#!/bin/bash

set -e

function kill_children() {
  for job in $(jobs -p)
  do
    kill -s SIGTERM "$job"
  done
}

function failed() {
  echo "$1"
  exit 1
}

# Make sure that children are sent a SIGINT if any part of this script fails.
trap kill_children EXIT

yarn run build;

# Logout of clasp
if ! test "$1" = "skip_logout"; then
  npx @google/clasp logout
  echo "Log into clasp with a test account, or you will pollute your Apps Scripts UI with a bunch of nonsense projects."
  npx @google/clasp login
fi

set -x
(# Happy path for connector
  trap 'rm -rf ./my-connector' EXIT
  ./test/integration-tests-no-travis/connector_happy_path.exp
  test -d ./my-connector || failed "Connector happy path failed."
) &

(# Happy path for viz
  trap 'rm -rf ./my-viz' EXIT
  ./test/integration-tests-no-travis/viz_happy_path.exp
  test -d ./my-viz || failed "Viz happy path failed."
) &

while wait -n;
do :
done
LAST_STATUS="$?"
test "$LAST_STATUS" -eq 127 || exit "$LAST_STATUS"
