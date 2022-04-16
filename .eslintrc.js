require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
	extends: [
		"@rushstack/eslint-config/profile/web-app",
		"@rushstack/eslint-config/mixins/react",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:testing-library/react",
		"prettier",
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.eslint.json"],
	},
	settings: {
		react: {
			version: "17.9",
		},
	},
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"],
			},
			{
				selector: "function",
				format: ["PascalCase", "camelCase"],
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],

		"jest/expect-expect": "off",
		"@rushstack/typedef-var": "off",
		"react/jsx-no-bind": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
	},
};
