module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
  },
};
