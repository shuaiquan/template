module.exports = {
    // 解析器
    parser: "@typescript-eslint/parser",
    // 扩展
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    // 插件
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    // 规则
    rules: {},
};