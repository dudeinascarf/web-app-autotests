module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'overrides': [],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'ui-testing'
    ],
    'extends': [
        'plugin:ui-testing/playwright'
    ],
    'rules': {
        'ui-testing/missing-assertion-in-test': 'off',
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'semi': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
    },
};

