import { execFileSync } from 'node:child_process';
import {
    copyFile,
    mkdtemp,
    readdir,
    rm,
    writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import {
    join,
    resolve,
} from 'node:path';

// Type-checks a small ESM file against every generated config so invalid module and target combinations fail here
// instead of in consumers.
const distPath = resolve('./dist');
const tscPath = resolve('./node_modules/typescript/bin/tsc');
await copyFile('./tsconfig.base.json', join(distPath, 'tsconfig.base.json'));

const configPaths = [
    resolve('./bun.json'),
    ...(await readdir(distPath, { recursive: true }))
        .filter((path) => path.endsWith('.json') && path !== 'tsconfig.base.json')
        .map((path) => join(distPath, path)),
];

const tempPath = await mkdtemp(join(tmpdir(), 'tsconfigs-verify-'));
const failures: string[] = [];
try {
    await writeFile(join(tempPath, 'index.ts'), 'export const value = 1;\n');
    await writeFile(join(tempPath, 'package.json'), '{ "type": "module" }\n');
    for (const configPath of configPaths) {
        const projectConfig = {
            compilerOptions: {
                noEmit: true,
                types: [],
            },
            extends: configPath,
            files: ['./index.ts'],
        };

        await writeFile(join(tempPath, 'tsconfig.json'), JSON.stringify(projectConfig));
        try {
            execFileSync(
                process.execPath,
                [
                    tscPath,
                    '-p',
                    tempPath,
                ],
                { stdio: 'pipe' },
            );
        } catch (error) {
            const output = error instanceof Error && 'stdout' in error ? String(error.stdout) : String(error);
            failures.push(`${configPath}\n${output}`);
        }
    }
} finally {
    await rm(
        tempPath,
        {
            force: true,
            recursive: true,
        },
    );
}

if (failures.length) {
    console.error(failures.join('\n'));
    process.exit(1);
}

console.log(`Verified ${configPaths.length} configs.`);
