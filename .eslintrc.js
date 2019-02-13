module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    "indent": [2, 4],
    options: {
      fix: true
    },
    'space-before-function-paren': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
