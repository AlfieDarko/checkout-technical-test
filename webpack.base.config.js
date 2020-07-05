/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "./src/index.js");
// PLATFORM === "production"
// ? MiniCssExtractPlugin.loader
// :
module.exports = {
  devtool: "cheap-module-eval-source-map",

  entry: [APP_DIR],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      "#views": path.resolve(__dirname, "src/views/"),
      "#assets": path.resolve(__dirname, "src/views/assets/"),
      "#context": path.resolve(__dirname, "src/context/"),
    },
    extensions: [".js", ".jsx", ".jpg", ".jpeg", ".gif", ".svg"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: "/node_modules/",

        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        exclude: "/node_modules/",

        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        exclude: "/node_modules/",

        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    // new webpack.DefinePlugin({
    //   "process.env.VERSION": JSON.stringify(env.VERSION),
    //   "process.env.PLATFORM": JSON.stringify(env.PLATFORM),
    // }),
    // new CopyPlugin({
    //   patterns: [{ from: "src/views/assets", to: "dist/assets" }],
    // }),
  ],
  // output: {
  //   filename: '[name].bundle.js',
  //   chunkFilename: '[name].chunk.bundle.js',
  //   path: path.resolve(__dirname, '..', 'dist'),
  //   publicPath: '/',
  // },
};
