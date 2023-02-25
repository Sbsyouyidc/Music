module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'indent': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'off',
    'no-new': 'off',
    'no-irregular-whitespace':'off'
  }
}
