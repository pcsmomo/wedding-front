module.exports = {
  env: {
    browser: true, // browser global variables.
    // "node": true,  // Node.js global variables and Node.js scoping.
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "jest",
    "jest-dom",
    "testing-library",
  ],
  ignorePatterns: [".eslintrc.js"],
  rules: {},
};
