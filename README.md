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

Available target options:
- es2020
- es2021
- es2022
- esnext
