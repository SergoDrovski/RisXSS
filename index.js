'use strict';

const path = require('path');
const importModules = require('import-modules');

const plugin = {
  meta: {
    name: 'eslint-plugin-risxss',
    version: '1.0.0'
  },
  rules: importModules(path.resolve(__dirname, 'rules'), { camelize: false }),
  configs: {}
};

// Создаем конфигурацию для ESLint 9 (flat config)
plugin.configs.recommended = {
  name: 'risxss/recommended',
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: {
    risxss: plugin
  },
  rules: {
    'risxss/catch-potential-xss-react': 'error',
    'risxss/catch-potential-xss-vue': 'error'
  }
};

// Для совместимости с ESLint 8 (legacy config)
plugin.configs.legacy = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['risxss'],
  rules: {
    'risxss/catch-potential-xss-react': 'error',
    'risxss/catch-potential-xss-vue': 'error'
  }
};

module.exports = plugin;
