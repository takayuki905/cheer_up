module.exports = {
  extends: [
    "stylelint-config-prettier-scss",
    "stylelint-config-standard-scss", // SCSS対応の標準ルールを継承
    "stylelint-config-recommended-scss",
    "stylelint-config-clean-order",
  ],
  customSyntax: "postcss-scss", // SCSS構文の解析に必要
  rules: {
    // SCSS特有のルールや、その他のカスタムルールをここに追加・上書き
    "scss/at-extend-no-missing-placeholder": true,
    "max-nesting-depth": 3, // ネストの深さを制限
  },
};
