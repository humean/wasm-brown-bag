const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  input: path.resolve(__dirname, "src"),
  output: path.resolve(__dirname, "dist")
};

module.exports = {
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".wasm"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
