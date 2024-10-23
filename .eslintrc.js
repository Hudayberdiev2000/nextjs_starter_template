/* eslint-env node */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['@typescript-eslint', 'tailwindcss'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        'next/core-web-vitals',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        //'plugin:@typescript-eslint/recommended-type-checked',
        // 'plugin:@typescript-eslint/strict-type-checked',
        // 'plugin:@typescript-eslint/stylistic-type-checked',
      ],
    },
  ],
};