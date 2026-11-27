# @kikiutils/tsconfigs

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Preconfigured TypeScript config files for stricter type checking and multi-environment support.

- [✨ Release Notes](./CHANGELOG.md)

## Features

- ⚙️ Preconfigured `tsconfig` with `strict` mode, stricter type checking (`isolatedModules`, `noUncheckedSideEffectImports`), and clean ESM support
- 🧬 Easy inheritance via the `extends` field in `tsconfig`
- 🔀 Multiple `tsconfig` variants to support different `module` and `target` settings
- 🍞 Includes official Bun settings for seamless integration

## Requirements

- **Node.js** `>=24.15.0`

## Installation

Using [pnpm](https://pnpm.io):

```bash
pnpm add -D @kikiutils/tsconfigs
```

You can also use `yarn`, `npm`, or `bun`.

## Usage

The base configuration is [`tsconfig.base.json`](./tsconfig.base.json).
You can extend it directly or pick one that matches your desired `module` and `target`.

Here's an example of a typical `tsconfig.json` setup:

```json
{
  "extends": "@kikiutils/tsconfigs/esnext/es2024.json",
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./dist",
    "declarationMap": true,
    "emitDeclarationOnly": true
  },
  "include": ["./src"]
}
```

The extends path is structured as:

```jsonl
@kikiutils/tsconfigs/<module>/<target>.json
```

For example, to use CommonJS as the module and ES2021 as the target, set:

```jsonl
"extends": "@kikiutils/tsconfigs/commonjs/es2021.json"
```

> [!NOTE]
> All paths and file names are lowercase.
>
> 🍞 If you're using the Bun runtime, simply use:
>
> ```jsonl
> "extends": "@kikiutils/tsconfigs/bun.json"
> ```

### Available modules

- CommonJS
- ES2015
- ES2020
- ES2022
- ESNext
- Node16
- Node18
- Node20
- NodeNext
- Preserve

### Available targets

- ES2015
- ES2016
- ES2017
- ES2018
- ES2019
- ES2020
- ES2021
- ES2022
- ES2023
- ES2024
- ES2025
- ESNext

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-href]: https://npmjs.com/package/@kikiutils/tsconfigs
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/tsconfigs/latest.svg?colorA=18181b&colorB=28cf8d&style=flat

[npm-downloads-href]: https://npmjs.com/package/@kikiutils/tsconfigs
[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/tsconfigs.svg?colorA=18181b&colorB=28cf8d&style=flat

[license-href]: https://github.com/kikiutils/node-tsconfigs/blob/main/LICENSE
[license-src]: https://img.shields.io/github/license/kikiutils/node-tsconfigs?colorA=18181b&colorB=28cf8d&style=flat
