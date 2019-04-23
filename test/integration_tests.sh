#!/bin/bash

set -ex

yarn run build;

# Interative Tests
for f in ./integration-tests/*.exp; do
  expect "$f"
done

# Flag tests. Tests with prefixed with a `!` are expected to fail.
! node ../build/index.js viz -d bucket/doubleTrailingSlash// > /dev/null 2>&1

! node ../build/index.js viz -p bucket/doubleTrailingSlash// > /dev/null 2>&1
