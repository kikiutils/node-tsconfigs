#!/bin/bash

set -e

SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
cd "$SCRIPT_DIR"

pnpm run generate

cp ./bun.json \
    ./jest.json \
    ./LICENSE \
    ./package.json \
    ./README.md \
    ./tsconfig.base.json \
    ./dist

cd ./dist
npm publish
