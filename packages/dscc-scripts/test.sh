#!/bin/bash

set -ex

yarn
yarn build
yarn test
