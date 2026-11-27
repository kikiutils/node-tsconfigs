import {
    mkdir,
    rm,
    writeFile,
} from 'node:fs/promises';

import { objectEntries } from 'ts-extras';

// Node module modes reject the base `bundler` resolution, so each one sets the resolution TypeScript requires.
// CommonJS turns off `verbatimModuleSyntax`, which would otherwise require `import = require()` syntax.
const modules = {
    CommonJS: { verbatimModuleSyntax: false },
    ES2015: {},
    ES2020: {},
    ES2022: {},
    ESNext: {},
    Node16: { moduleResolution: 'Node16' },
    Node18: { moduleResolution: 'Node16' },
    Node20: { moduleResolution: 'Node16' },
    NodeNext: { moduleResolution: 'NodeNext' },
    Preserve: {},
};

const targets = [
    'ES2015',
    'ES2016',
    'ES2017',
    'ES2018',
    'ES2019',
    'ES2020',
    'ES2021',
    'ES2022',
    'ES2023',
    'ES2024',
    'ES2025',
    'ESNext',
] as const;

await rm(
    './dist',
    {
        force: true,
        recursive: true,
    },
);

for (const [module, moduleOptions] of objectEntries(modules)) {
    const lowerCaseModule = module.toLowerCase();
    await mkdir(`./dist/${lowerCaseModule}`, { recursive: true });
    for (const target of targets) {
        const config = {
            /* eslint-disable perfectionist/sort-objects */
            $schema: 'https://json.schemastore.org/tsconfig.json',
            extends: '../tsconfig.base.json',
            compilerOptions: {
                module,
                target,
                ...moduleOptions,
            },
            /* eslint-enable perfectionist/sort-objects */
        };

        await writeFile(
            `./dist/${lowerCaseModule}/${target.toLowerCase()}.json`,
            JSON.stringify(config, null, 2),
        );
    }
}
