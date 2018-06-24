import React from "react";
import { View, Text } from "react-native";
import appStyle from "../css/css";
class Titles extends React.Component {
  render() {
    return (
      <View style={appStyle.titleView}>
        <Text style={appStyle.title}>Weather Finder</Text>
        <Text style={appStyle.tagline}>
          Find Out Weather, Conditions and More....
        </Text>
      </View>
    );
  }
}

export default Titles;
