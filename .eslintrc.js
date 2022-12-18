module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'import/no-unresolved': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', ignoreRestSiblings: false }
    ]
  }
};
