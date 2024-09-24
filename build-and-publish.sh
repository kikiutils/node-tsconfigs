#!/bin/bash

cd "$(dirname "$(readlink -f "$0")")"
pnpm run generate && cp ./bun.json ./LICENSE ./package.json ./README.md ./tsconfig.base.json ./dist && cd ./dist && npm publish
