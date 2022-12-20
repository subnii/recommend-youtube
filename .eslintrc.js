module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
  },
};
