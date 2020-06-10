const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssUrlRelativePlugin = require("css-url-relative-plugin");
const path = require("path");

const EXCLUDED_DIRECTORIES_REGEX = /(node_modules|public)/;
const STYLESHEET_REGEX = /\.s?css$/;
const CSS_MODULES_REGEX = /\.module\.s(a|c)ss$/;
const JS_AND_JSX_REGEX = /\.jsx?$/;
const IMAGE_REGEX = /\.(png|jpg|gif|svg)$/i;
const FONTS_REGEX = /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/;

const config = {
  devServer: {
    historyApiFallback: true,
    host: "local.mock.com",
    proxy: {
      "/mock": "http://localhost:5678"
    }
  },
  resolve: {
    extensions: [".jsx", ".js", ".scss"],
    modules: [
      path.resolve("./src"),
      path.resolve("./js"),
      path.resolve("./node_modules"),
      "node_modules"
    ]
  },
  entry: {
    app: path.resolve(__dirname, "src/index.jsx")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle")
  },
  module: {
    rules: [
      {
        test: JS_AND_JSX_REGEX,
        exclude: EXCLUDED_DIRECTORIES_REGEX,
        use: ["babel-loader?cacheDirectory"]
      },
      {
        test: CSS_MODULES_REGEX,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              camelCase: true,
              sourceMap: true
            }
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: STYLESHEET_REGEX,
        exclude: CSS_MODULES_REGEX,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [require("autoprefixer")];
              }
            }
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: IMAGE_REGEX,
        exclude: EXCLUDED_DIRECTORIES_REGEX,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: FONTS_REGEX,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        cache: true
      }),
      new OptimizeCssAssetsPlugin({}),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CssUrlRelativePlugin()
  ]
};

module.exports = config;
