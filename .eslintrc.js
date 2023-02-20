module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  ignorePatterns: ["dist", "node_modules"],
  root: true,
  rules: {
    "arrow-parens": 1,
    camelcase: 1,
    "max-params": ["error", 3],
    "no-duplicate-imports": 1,
    "no-restricted-syntax": [
      1,
      {
        selector: "ExportDefaultDeclaration",
        message: "Prefer named exports.",
      },
    ],
    "no-tabs": 1,
  },
}
