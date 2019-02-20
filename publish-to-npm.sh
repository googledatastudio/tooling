#!/bin/bash

yarn install
yarn build
yarn version
npm login --registry https://wombat-dressing-room.appspot.com
npm publish --registry https://wombat-dressing-room.appspot.com
