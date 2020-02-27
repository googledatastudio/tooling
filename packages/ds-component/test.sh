#!/bin/bash

set -ex

yarn install
yarn lint
yarn test
