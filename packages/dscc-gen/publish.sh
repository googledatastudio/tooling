#!/bin/bash

# Install needed dependencies
npm install
# Double check all tests work
npm run travis
# Delete old build files
rm -rf build
# Build code
npm run build
# Create a new version
npm run version
# Create a new publish token
npm login --registry https://wombat-dressing-room.appspot.com
# Publish new version to npm
npm publish --registry https://wombat-dressing-room.appspot.com
