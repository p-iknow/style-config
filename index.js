module.exports = {
  plugins: [
    // https://github.com/jest-community/eslint-plugin-jest
    "jest",
    // 'jsx-a11y', in "airbnb"
    // 'react' in "airbnb"
    // '@typescript-eslint' in "airbnb-typescript",
    // 'react-hooks' in 'airbnb/hooks'
  ],
  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    "airbnb",
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-hooks.js
    'airbnb/hooks', // this is not included in airbnb
    // https://github.com/iamturns/eslint-config-airbnb-typescript
    "airbnb-typescript",
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    // https://github.com/jest-community/eslint-plugin-jest
    "plugin:jest/recommended",
    // https://github.com/testing-library/eslint-plugin-jest-dom
    "plugin:jest-dom/recommended",
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/react-in-jsx-scope": "off",
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-react": "off",
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    "react/jsx-props-no-spreading": "off",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    "react/no-unescaped-entities": "off",
    // Use function hoisting to improve code readability
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
