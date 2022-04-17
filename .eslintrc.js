module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
            legacyDecorators: true
        },
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "space-before-function-paren": ["error", "never"],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
}
