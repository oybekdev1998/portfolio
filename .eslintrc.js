module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'max-len': ['warn', { code: 120 }],
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['warn', 'always'],
  },
};
