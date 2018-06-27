// @flow

import React from "react";
import { Button, View, Text } from "react-native";
import type { Navigation } from "../common/navigation";

import styles from "./styles";

type Props = {
  navigation: Navigation,
};

class DetailsScreen extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push("Details")}
        />
      </View>
    );
  }
}

export default DetailsScreen;
