const path = require("path");
const webpack = require("webpack");
const { loaders } = require("../webpack.common");

module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.module.rules.push(...loaders);

  storybookBaseConfig.resolve.extensions = [".web.js", ".js"];

  storybookBaseConfig.resolve.alias = {
    "react-native": "react-native-web",
  };

  return storybookBaseConfig;
};
