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
    // https://nextjs.org/docs/basic-features/eslint#migrating-existing-config
    'plugin:@next/next/recommended',
    // https://github.com/jest-community/eslint-plugin-jest
    "plugin:jest/recommended",
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
  ],
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
    jest: {
      version: require('jest/package.json').version,
    },
  },
};
