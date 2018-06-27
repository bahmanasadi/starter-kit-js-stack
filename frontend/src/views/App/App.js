// @flow

import React from "react";
import { createStackNavigator } from "react-navigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "../home/HomeScreen";
import DetailsScreen from "../details/DetailsScreen";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  { initialRouteName: "Home" },
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <RootStack />
  </PaperProvider>
);

export default App;
