module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
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
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'lit-a11y/click-events-have-key-events': [
      'error',
      {
        allowList: 'foo-button',
        allowCustomElements: false,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-no-comment-textnodes': 'off',
  },
};
