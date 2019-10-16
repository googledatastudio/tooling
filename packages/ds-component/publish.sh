#!/bin/bash

cd packages/ds-component

yarn

yarn travis

rm -rf build

yarn build

yarn bersion

npm login --registry https://wombat-dressing-room.appspot.com

npm publish --registry https://wombat-dressing-room.appspot.com
