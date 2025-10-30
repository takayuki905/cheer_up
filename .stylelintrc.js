module.exports = {
  "extends": "stylelint-config-standard-scss", // SCSS対応の標準ルールを継承
  "customSyntax": "postcss-scss",             // SCSS構文の解析に必要
  "rules": {
    // SCSS特有のルールや、その他のカスタムルールをここに追加・上書き
    "scss/at-extend-no-missing-placeholder": true,
    "indentation": 2,
    "color-hex-case": "lower", // 16進数カラーコードを小文字に強制
    "max-nesting-depth": 3 // ネストの深さを制限
  }
}
