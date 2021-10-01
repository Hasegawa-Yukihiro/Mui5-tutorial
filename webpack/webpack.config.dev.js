const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

/**
 * @description 環境変数の設定
 * @param DOMAIN ドメイン
 * @param NODE_ENV 環境名
 */
const env = {
  NODE_ENV: JSON.stringify("development"),
  DOMAIN: JSON.stringify("http://localhost:3000"),
};

//  環境変数
const { ProcessEnvironment } = require("../config/scripts/environment");
const processEnvironment = new ProcessEnvironment();

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    static: "dist",
    open: true,
    port: 3000,
    /** 404のfallback先を /index.html にする */
    historyApiFallback: true,
  },
  plugins: [
    /** 環境変数の追加 */
    new webpack.DefinePlugin({
      "process.env": processEnvironment.toJson(),
    }),
  ],
});

module.exports = config;
