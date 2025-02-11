import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const isBuilding = process.env.NODE_ENV === 'production';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  },
  {
    rules: {
      'no-alert': 'error',
      'no-ternary': 'warn',
      'no-console': 'warn',
      'no-warning-comments':
      isBuilding === 'production' ? 'off' : 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
