# @kikiutils/tsconfigs

Commonly used tsconfig configuration files.

You can extend the @kikiutils/tsconfigs/module/target setting in tsconfig.json.

**Detailed documentation will be added in future releases.**

Example:

```json
{
  "extends": "@kikiutils/tsconfigs/esnext/esnext.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Available module options:
- cjs
- es6
- es2020
- es2022
- esnext
- nodenext (The moduleResolution is also set to nodenext.)

Available target options:
- es2020
- es2021
- es2022
- esnext

### Special Setting File

If you are using bun, please use `@kikiutils/tsconfigs/bun.json` directly.

The settings are based on the recommendations in the [official document](https://bun.sh/docs/typescript#suggested-compileroptions).

Example:

```json
{
  "extends": "@kikiutils/tsconfigs/bun.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```