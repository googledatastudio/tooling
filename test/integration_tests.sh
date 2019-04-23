#!/bin/bash

set -ex

yarn run build;

! node ../build/index.js viz -d bucket/doubleTrailingSlash// > /dev/null 2>&1

! node ../build/index.js viz -p bucket/doubleTrailingSlash// > /dev/null 2>&1
