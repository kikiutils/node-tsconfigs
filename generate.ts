import {
    mkdir,
    rm,
    writeFile,
} from 'node:fs/promises';

const baseConfigString = JSON.stringify({
    /* eslint-disable perfectionist/sort-objects */
    $schema: 'https://json.schemastore.org/tsconfig.json',
    extends: '../tsconfig.base.json',
    compilerOptions: {
        module: '',
        target: '',
    },
    /* eslint-enable perfectionist/sort-objects */
});

const modules = [
    'AMD',
    'CommonJS',
    'ES6',
    'ES2015',
    'ES2020',
    'ES2022',
    'ESNext',
    'Node16',
    'Node18',
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
    'ES2024',
    'ESNext',
] as const;

(async () => {
    await rm(
        './dist',
        {
            force: true,
            recursive: true,
        },
    );

    for (const module of modules) {
        const lowerCaseModule = module.toLowerCase();
        await mkdir(`./dist/${lowerCaseModule}`, { recursive: true });
        const config = JSON.parse(baseConfigString);
        config.compilerOptions.module = module;
        // eslint-disable-next-line style/array-bracket-newline, style/array-element-newline
        if (['amd', 'system', 'umd'].includes(lowerCaseModule)) config.compilerOptions.verbatimModuleSyntax = false;
        for (const target of targets) {
            config.compilerOptions.target = target;
            await writeFile(
                `./dist/${lowerCaseModule}/${target.toLowerCase()}.json`,
                JSON.stringify(config, null, 2),
            );
        }
    }
})();
