import fsp from 'fs/promises';

const baseContent = `
{
  "$schema": "https://json.schemastore.org/tsconfig.json",
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "module": "moduleToReplace",
    "target": "targetToReplace"
  }
}
`;

const modules = [
	'AMD',
	'CommonJS',
	'ES6',
	'ES2015',
	'ES2020',
	'ES2022',
	'ESNext',
	'Node',
	'None',
	'Node16',
	'NodeNext',
	'Preserve',
	'System',
	'UMD'
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
	'ESNext'
] as const;

(async () => {
	for (const module of modules) {
		await fsp.rm(`./${module.toLowerCase()}`, { force: true, recursive: true });
		await fsp.mkdir(`./${module.toLowerCase()}`, { recursive: true });
		for (const target of targets) await fsp.writeFile(`./${module.toLowerCase()}/${target.toLowerCase()}.json`, baseContent.replace('moduleToReplace', module).replace('targetToReplace', target));
	}
})();
