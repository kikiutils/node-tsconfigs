import fsp from 'node:fs/promises';

const baseConfig = {
    $schema: 'https://json.schemastore.org/tsconfig.json',
    compilerOptions: {
        module: '',
        target: '',
    },
    extends: '../tsconfig.base.json',
} as const;

const modules = [
    'AMD',
    'CommonJS',
    'ES6',
    'ES2015',
    'ES2020',
    'ES2022',
    'ESNext',
    'Node16',
    'NodeNext',
    'None',
    'Preserve',
    'System',
    'UMD',
] as const;

const targets = [
    'ES3',
    'ES5',
    'ES6',
    'ES2015',
    'ES2016',
    'ES2017',
    'ES2018',
    'ES2019',
    'ES2020',
    'ES2021',
    'ES2022',
    'ES2023',
    'ESNext',
] as const;

(async () => {
    await fsp.rm(
        './dist',
        {
            force: true,
            recursive: true,
        },
    );

    for (const module of modules) {
        const lowerCaseModule = module.toLowerCase();
        await fsp.mkdir(`./dist/${lowerCaseModule}`, { recursive: true });
        const config = JSON.parse(JSON.stringify(baseConfig));
        config.compilerOptions.module = module;
        if (
            [
                'amd',
                'system',
                'umd',
            ].includes(lowerCaseModule)
        ) config.compilerOptions.verbatimModuleSyntax = false;

        for (const target of targets) {
            config.compilerOptions.target = target;
            await fsp.writeFile(
                `./dist/${lowerCaseModule}/${target.toLowerCase()}.json`,
                JSON.stringify(config, null, 2),
            );
        }
    }
})();
