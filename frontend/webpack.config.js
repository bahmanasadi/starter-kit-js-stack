// web/webpack.config.js
/* global __dirname, module, process, require */

const path = require("path");
const webpack = require("webpack");
const { loaders } = require("./webpack.common");

const appDirectory = path.resolve(__dirname, "./");

const commonConfig = {
  devtool: "eval",
  module: {
    rules: loaders,
  },

  plugins: [
    // process.env.NODE_ENV === 'production' must be true for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
      __DEV__: process.env.NODE_ENV === "production" || true,
    }),
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // '.web.js'.
    symlinks: false,
    extensions: [".web.js", ".js"],
    alias: {
      "./assets/images/slack-icon.png": "./assets/images/slack-icon@2x.png",
      "react-native": "react-native-web",
    },
  },
};

const ssrConfig = {
  target: "node",
  // your web-specific entry file
  entry: {
    ssr: path.resolve(appDirectory, "ssr/index.js"),
  },
  // configures where the build ends up
  output: {
    filename: "ssr.bundle.js",
    path: path.resolve(appDirectory, "./ssr/dist"),
    library: "library",
    libraryTarget: "umd",
  },
  ...commonConfig,
};

const clientConfig = {
  target: "web",
  entry: {
    index: path.resolve(appDirectory, "src/index.js"),
  },
  output: {
    filename: "client.bundle.js",
    publicPath: "/assets/",
    path: path.resolve(appDirectory, "./public/assets"),
  },
  ...commonConfig,
};

module.exports = [ssrConfig, clientConfig];
