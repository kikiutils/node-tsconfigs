import { createConfig } from '@kikiutils/eslint-config';

export default createConfig(
    'node',
    {
        ignores: ['tsconfig.base.json'],
        type: 'lib',
    },
).overrideRules({ 'ts/explicit-function-return-type': 'off' });
