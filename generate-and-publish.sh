#!/bin/bash

set -euo pipefail

SCRIPTS_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
cd "${SCRIPTS_DIR}"

pnpm run generate
cp -p ./bun.json \
    ./jest.json \
    ./LICENSE \
    ./package.json \
    ./README.md \
    ./tsconfig.base.json \
    ./dist

cd ./dist
npm publish
