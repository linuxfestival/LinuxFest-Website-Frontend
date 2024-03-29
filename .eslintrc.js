module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'no-fallthrough': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'off',
      'unix'
    ],
    // 'quotes': [
    //   'error',
    //   // 'single'
    // ],
    'semi': [
      'error',
      'never'
    ]
  }
}
