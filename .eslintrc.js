// api-server/.eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'sonarjs'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
    ],
    root: true,
    env: {
        node: true,
    },
    ignorePatterns: [
        'node_modules/',
        'dist/',
        '.eslintrc.js',
        // Add any other directories or files to ignore
    ],
    rules: {
        // TypeScript and clean code best practices
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-non-null-assertion': 'error',
        // Add more strict rules or modify these according to your project's needs
    },
    overrides: [
        {
            files: ['*.js'],
        }
    ]
};
