module.exports = {
  plugins: [
    // https://github.com/jest-community/eslint-plugin-jest
    "jest",
    // '@typescript-eslint' in "airbnb-typescript",
  ],
  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
		'airbnb-base',
    // https://github.com/iamturns/eslint-config-airbnb-typescript
    "airbnb-typescript/base",
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    // https://github.com/jest-community/eslint-plugin-jest
    "plugin:jest/recommended",
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
  ],
  env: {
    node: true,
    es2022: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
  rules: {
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
    jest: {
      version: require('jest/package.json').version,
    },
  },
};
