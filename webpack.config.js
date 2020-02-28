const CopyPlugin = require("copy-webpack-plugin");

/**
 * @type import("webpack").Configuration
 */
module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "inline-source-map",
  entry: {
    // popup: `${__dirname}/src/popup.ts`,
    content: `${__dirname}/src/content.ts`
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    // publicフォルダに、manifest.jsonやicon.pngを置いたので、
    // それが一緒に./distフォルダに吐き出されるようにする
    new CopyPlugin([{ from: "./public", to: "./" }])
  ]
};
