module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  ignorePatterns: [
    "types/env.d.ts",
    "node_modules/**",
    "**/dist/**",
    "tsconfig.json",
    ".eslintrc.cjs",
  ],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "no-plusplus": "off",
  },
};
