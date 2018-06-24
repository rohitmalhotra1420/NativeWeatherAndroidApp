import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import appStyle from "./css/css";
import { View } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={appStyle.appWrapper}>
        <Titles />
        <Form />
      </View>
    );
  }
}

export default App;
