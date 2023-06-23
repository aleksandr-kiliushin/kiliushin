module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
  ],
  ignorePatterns: ["dist", "node_modules"],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "arrow-parens": 1,
    camelcase: 1,
    "max-params": ["error", 2],
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




