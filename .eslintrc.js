module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": 0,
    "quotes": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/button-has-type": 0,
    "arrow-parens": 0,
    "no-shadow": 0
  }
};
