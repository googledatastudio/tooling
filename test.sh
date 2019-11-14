#!/bin/bash
set -ex

(cd packages/ds-component && ./test.sh)

(cd packages/dscc-validation && ./test.sh)

(cd packages/dscc-scripts && ./test.sh)

(cd packages/dscc-gen && ./test.sh)
