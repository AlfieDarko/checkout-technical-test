const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

// TODO: Split DEV/PROD webpack configs
module.exports = {
  devtool: "source-map",
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
        resolve: {
          extensions: [".js", ".jsx"],
        },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
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
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
