module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 13,
    },
    "plugins": [
		"vue"
    ],
    "rules": {
		"no-console": "on",
		'indent': ['error', 2],
		'no-multi-spaces': ['error']
	}
};
