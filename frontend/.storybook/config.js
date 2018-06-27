// @flow

import { setOptions } from "@storybook/addon-options";
import { configure, addDecorator } from "@storybook/react";
import { injectFonts } from "../webpack.common";

const context = require.context("../src/views", true, /\.stories\.js$/);

setOptions({
  name: "React Native Web",
  url: "https://necolas.github.io/react-native-web",
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: false,
  showStoriesPanel: true,
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);

injectFonts(document);
