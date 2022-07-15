module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'plugin:yml/standard',
  ],
  parserOptions: {
    ecmaVersion: 'esnext',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*svelte'],
      processor: 'svelte3/svelte3',
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
    // 'svelte3/ignore-styles': () => true
  },
  plugins: ['svelte3', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['node_modules', '!.github'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
    'linebreak-style': ['error', 'unix'],
    'no-unsafe-any': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prefer-const': 1,
  },
};
