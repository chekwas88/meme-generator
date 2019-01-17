module.exports = {
    "extends": "airbnb",
    env: {
        browser: true,
        node: true,
    },
    "parserOptions": {
        "sourceType": "module",
        "import/extensions": [".jsx", ".js"],
        "allowImportExportEverywhere": true
    },

    rules: {
        "linebreak-style": 0,
        "react/prop-types": 0,
        "no-unused-expressions": 0,
        "react/jsx-filename-extension": 0,
        "class-methods-use-this": 0,
        "default-case": 0,
        "import/no-unresolved": 0,
        "react/prefer-stateless-function": 0,
        "import/no-named-as-default": 0
    }
};