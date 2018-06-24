import React from "react";
import {
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Text,
  Alert
} from "react-native";
import Weather from "./Weather";
import appStyle from "../css/css";
import axios from "axios";

class Form extends React.Component {
  state = {
    city: null,
    country: null,
    temperature: null,
    humidity: null,
    description: null,
    error: null,
    resultCity: null,
    resultCountry: null
  };
  render() {
    return (
      <View style={appStyle.formView}>
        <TextInput
          style={appStyle.input}
          placeholder="CITY"
          onChangeText={text => this.setState({ city: text })}
        />
        <TextInput
          style={appStyle.input}
          placeholder="COUNTRY"
          onChangeText={text => this.setState({ country: text })}
        />

        <TouchableHighlight
          onPress={() => {
            this.handlePress(this.state.city, this.state.country);
          }}
          underlayColor="#2196F3"
        >
          <View style={appStyle.button}>
            <Text style={appStyle.buttonText}>GET WEATHER</Text>
          </View>
        </TouchableHighlight>
        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          country={this.state.resultCountry}
          city={this.state.resultCity}
          error={this.state.error}
        />
      </View>
    );
  }
  handlePress(city, country) {
    console.log(city, country);
    const API_KEY = "b3e83e7362e1c0dbcdfbf2f81b3bcc11";
    if (city && country) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metrics`
        )
        .then(response => {
          const tempCelcius = response.data.main.temp - 273.15;
          this.setState({
            temperature: tempCelcius.toFixed(2),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description.toUpperCase(),
            resultCountry: response.data.sys.country.toUpperCase(),
            resultCity: response.data.name.toUpperCase(),
            error: null
          });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      this.setState({
        error: "Please Enter City & Country ",
        city: null,
        country: null,
        temperature: null,
        humidity: null,
        description: null,
        resultCity: null,
        resultCountry: null
      });
    }
  }
}

export default Form;
