module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeature:{
      tsx:true,
    }
  },
  settings:{
    react:{
      version: 'detected'
    },
    'import/resolver':{
      node:{
        paths:['src'],
        extensions:['.ts', '.tsx','.js','.jsx']
      }
    },
  },
  env: { 
    browser: true, 
    es2020: true, 
    node: true,
    amd: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh', 'prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', {}, {usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
