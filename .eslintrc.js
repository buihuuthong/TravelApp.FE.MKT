module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    // 'plugin:import/recommended',
    'plugin:json/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier', 'import'],
  settings: {
    parser: '@babel/eslint-parser',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      alias: {
        map: [
          ['@services', './src/services'],
          ['@screens', './src/screens'],
          ['@redux', './src/redux'],
          ['@assets', './src/assets'],
          ['@utils', './src/utils'],
          ['@navigations', './src/navigations'],
          ['@base-components', './src/base-components'],
          ['@constants', './src/constants'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/prop-types': 0,
    'no-undef': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-var': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'import/no-unresolved': ['error', { ignore: ['^@env'] }],
    'import/no-named-as-default-member': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
  },
};
