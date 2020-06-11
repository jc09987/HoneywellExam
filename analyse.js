/* eslint-disable no-console */
// script to enable webpack-bundle-analyzer
process.env.NODE_ENV = "production";
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpackConfig = require("./webpack.build.js");

webpackConfig.plugins.push(new BundleAnalyzerPlugin());

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
});
