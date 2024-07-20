import fsp from 'fs/promises';

const baseConfig = {
	$schema: 'https://json.schemastore.org/tsconfig.json',
	extends: '../tsconfig.base.json',
	compilerOptions: { module: '', target: '' }
} as const;

const modules = [
	'AMD',
	'CommonJS',
	'ES6',
	'ES2015',
	'ES2020',
	'ES2022',
	'ESNext',
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
		const lowerCaseModule = module.toLowerCase();
		await fsp.rm(`./${lowerCaseModule}`, { force: true, recursive: true });
		await fsp.mkdir(`./${lowerCaseModule}`, { recursive: true });
		const config = JSON.parse(JSON.stringify(baseConfig));
		config.compilerOptions.module = module;
		// prettier-ignore
		if (['amd', 'system', 'umd'].includes(lowerCaseModule)) config.compilerOptions.verbatimModuleSyntax = false;
		for (const target of targets) {
			config.compilerOptions.target = target;
			await fsp.writeFile(`./${lowerCaseModule}/${target.toLowerCase()}.json`, JSON.stringify(config, null, 2));
		}
	}
})();
