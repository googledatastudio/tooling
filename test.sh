#!/bin/bash

set -ex

(cd packages/dscc-gen && ./test.sh)

(cd packages/dscc-scripts && ./test.sh)
