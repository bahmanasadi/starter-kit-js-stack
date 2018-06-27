/* global __dirname, module, require */

const path = require("path");
const appDirectory = path.resolve(__dirname, ".");

const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, "src"),
    path.resolve(appDirectory, "node_modules/react-navigation"),
    path.resolve(appDirectory, "node_modules/react-native-tab-view"),
    path.resolve(appDirectory, "node_modules/react-native-paper"),
    path.resolve(appDirectory, "node_modules/react-native-vector-icons"),
    path.resolve(appDirectory, "node_modules/react-native-safe-area-view"),
    path.resolve(appDirectory, "node_modules/react-native-platform-touchable"),
  ],
  use: {
    loader: "babel-loader",
    options: {
      // cacheDirectory: false,
      babelrc: false,
      // Babel configuration (or use .babelrc)
      // This aliases 'react-native' to 'react-native-web' and includes only
      // the modules needed by the app.
      plugins: [
        "react-native-web",
        "transform-decorators-legacy",
        [
          "transform-runtime",
          { helpers: false, polyfill: false, regenerator: true },
        ],
      ],
      // The 'react-native' preset is recommended to match React Native's packager
      presets: ["react-native"],
    },
  },
};

// This is needed for loading css
const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
    },
  },
};

const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "./fonts/[hash].[ext]",
      },
    },
  ],
};

const injectFonts = (document) => {
  // Generate required css
  const fontMaterialIcons = require("react-native-vector-icons/Fonts/MaterialIcons.ttf");
  const fontStylesMaterialIcons = `@font-face { src: url(${fontMaterialIcons}); font-family: "Material Icons"; }`;
  const fontFontAwesome = require("react-native-vector-icons/Fonts/FontAwesome.ttf");
  const fontStylesFontAwesome = `@font-face { src: url(${fontFontAwesome}); font-family: FontAwesome; }`;
  const fontZocial = require("react-native-vector-icons/Fonts/Zocial.ttf");
  const fontStylesZocial = `@font-face { src: url(${fontZocial}); font-family: Zocial; }`;
  const fontOcticons = require("react-native-vector-icons/Fonts/Octicons.ttf");
  const fontStylesOcticons = `@font-face { src: url(${fontOcticons}); font-family: Octicons; }`;
  const fontMaterialCommunityIcons = require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf");
  const fontStylesMaterialCommunityIcons = `@font-face { src: url(${fontMaterialCommunityIcons}); font-family: MaterialCommunityIcons; }`;
  const fontFoundation = require("react-native-vector-icons/Fonts/Foundation.ttf");
  const fontStylesFoundation = `@font-face { src: url(${fontFoundation}); font-family: Foundation; }`;
  const fontSimpleLineIcons = require("react-native-vector-icons/Fonts/SimpleLineIcons.ttf");
  const fontStylesSimpleLineIcons = `@font-face { src: url(${fontSimpleLineIcons}); font-family: SimpleLineIcons; }`;
  const fontEvilIcons = require("react-native-vector-icons/Fonts/EvilIcons.ttf");
  const fontStylesEvilIcons = `@font-face { src: url(${fontEvilIcons}); font-family: EvilIcons; }`;
  const fontEntypo = require("react-native-vector-icons/Fonts/Entypo.ttf");
  const fontStylesEntypo = `@font-face { src: url(${fontEntypo}); font-family: Entypo; }`;
  const fontIonicons = require("react-native-vector-icons/Fonts/Ionicons.ttf");
  const fontStylesIonicons = `@font-face { src: url(${fontIonicons}); font-family: Ionicons; }`;
  const fontFeather = require("react-native-vector-icons/Fonts/Feather.ttf");
  const fontStylesFeather = `@font-face { src: url(${fontFeather}); font-family: Feather; }`;

  const fonts = [
    fontStylesMaterialIcons,
    fontStylesFontAwesome,
    fontStylesZocial,
    fontStylesOcticons,
    fontStylesMaterialCommunityIcons,
    fontStylesFoundation,
    fontStylesSimpleLineIcons,
    fontStylesEvilIcons,
    fontStylesEntypo,
    fontStylesIonicons,
    fontStylesFeather,
  ];

  fonts.forEach((font) => {
    // Create stylesheet
    const style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = font;
    } else {
      style.appendChild(document.createTextNode(font));
    }
    // Inject stylesheet
    document.head.appendChild(style);
  });
};

module.exports = {
  injectFonts,
  loaders: [
    babelLoaderConfiguration,
    cssLoaderConfiguration,
    imageLoaderConfiguration,
    ttfLoaderConfiguration,
  ],
};
