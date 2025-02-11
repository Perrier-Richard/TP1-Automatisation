import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'no-alert': 'error',
      'no-ternary': 'warn',
      'no-console': 'warn',
      'no-warning-comments':
        process.env.NODE_ENV === 'production' ? 'off' : 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
