// @flow

import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Button } from "react-native-paper";
import type { Navigation } from "../common/navigation";
import styles from "./styles";

type Props = {
  navigation: Navigation,
};

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Home Screen</Text>
        <Button
          primary
          raised
          icon="search"
          onPress={() => {
            this.props.navigation.navigate("Details");
          }}
        >
          Search
        </Button>
        <Button
          raised
          onPress={() => {
            this.props.navigation.navigate("Details");
          }}
        >
          Go to Details
        </Button>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Details");
          }}
        >
          <Text>This is a test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
