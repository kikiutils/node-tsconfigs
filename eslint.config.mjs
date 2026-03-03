import { antfu } from '@antfu/eslint-config';
import { createBaseConfigs } from '@kikiutils/eslint-config/base';

export default antfu(
    {
        ignores: ['tsconfig.base.json'],
        type: 'lib',
        typescript: true,
    },
    createBaseConfigs(),
    { rules: { 'ts/explicit-function-return-type': 'off' } },
);
