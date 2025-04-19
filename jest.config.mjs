/** @type {import('jest').Config} */
export default {
    clearMocks: true,
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            { tsconfig: './jest.json' },
        ],
    },
    workerThreads: true,
};
