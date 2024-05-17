module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    // parser: "babel-eslint",
    parser: "@babel/eslint-parser",
    ecmaVersion: "latest",
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    "prettier/prettier": "warn",
  },
};
