const webpack = require("webpack");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const config = require("./webpack.config.js");

config.devtool = "";

config.plugins = config.plugins.concat(
  new FileManagerPlugin({
    onStart: {
      delete: ["bundle"]
    }
  }),
  new CompressionPlugin({
    filename: "[path].br[query]",
    algorithm: "brotliCompress",
    compressionOptions: { level: 11 },
    threshold: 10240,
    minRatio: 0.8,
    deleteOriginalAssets: false
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
      STUDENTS_API_URL: JSON.stringify('/mock/students')
    }
  })
);

module.exports = config;
