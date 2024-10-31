# @kikiutils/tsconfigs

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Base tsconfigs files.

## Installation

Add dependency (example using pnpm).

```bash
pnpm add -D @kikiutils/tsconfigs
```

You can also use yarn, npm, or bun to add the dependency.

That's it! You're ready to use this package in your project. Check out the instructions for [usage](#usage) below ✨.

## Usage

Here is an example of the tsconfig.json content:

```json
{
  "extends": "@kikiutils/tsconfigs/esnext/es2022.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["./src"]
}
```

The file path for extend is composed as "@kikiutils/tsconfigs/`compilerOptions.module`/`compilerOptions.target`.json".

For example, if you want to set `compilerOptions.module` to `CommonJS` and `compilerOptions.target` to `ES2021`, the value of the extends option should be `@kikiutils/tsconfigs/commonjs/es2021.json`.

> [!NOTE]
> If using the Bun runtime, please use `@kikiutils/tsconfigs/bun.json` directly.

For more information about the `module` and `target` options, please visit the the following links.

- [module](https://www.typescriptlang.org/tsconfig/#module)
- [target](https://www.typescriptlang.org/tsconfig/#target)

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-href]: https://npmjs.com/package/@kikiutils/tsconfigs
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/tsconfigs/latest.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-downloads-href]: https://npmjs.com/package/@kikiutils/tsconfigs
[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/tsconfigs.svg?style=flat&colorA=18181B&colorB=28CF8D

[license-href]: https://github.com/kiki-kanri/kikiutils-node-tsconfigs/blob/main/LICENSE
[license-src]: https://img.shields.io/npm/l/@kikiutils/tsconfigs.svg?style=flat&colorA=18181B&colorB=28CF8D
