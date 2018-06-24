import React from "react";
import { View, Text } from "react-native";
import appStyle from "../css/css";
class Weather extends React.Component {
  render() {
    return (
      <View>
        {this.props.city &&
          this.props.country && (
            <Text style={appStyle.result}>
              Place: {this.props.city}, {this.props.country}
            </Text>
          )}

        {this.props.temperature && (
          <Text style={appStyle.result}>
            Temperature: {this.props.temperature} °C
          </Text>
        )}
        {this.props.humidity && (
          <Text style={appStyle.result}>Humidity: {this.props.humidity} %</Text>
        )}
        {this.props.description && (
          <Text style={appStyle.result}>
            Description: {this.props.description}
          </Text>
        )}

        {this.props.error && (
          <Text style={appStyle.error}>{this.props.error}</Text>
        )}
      </View>
    );
  }
}

export default Weather;
