const webpack = require("webpack");
const AutoDllPlugin = require("autodll-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = require("./webpack.config.js");

config.plugins = config.plugins.concat(
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebPackPlugin({
    template: "./src/templates/index.html",
    chunks: ["app"],
    filename: "./index.html",
    meta: {
      viewport: "width=device-width, initial-scale=1.0"
    }
  }),
  new AutoDllPlugin({
    inject: true,
    debug: true,
    filename: "[name]_[hash].js",
    path: "./dll",
    entry: {
      vendor: ["react", "react-dom"]
    }
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      STUDENTS_API_URL: JSON.stringify('/mock/students')
    }
  })
);

module.exports = config;
