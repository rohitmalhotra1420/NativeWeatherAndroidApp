import { StyleSheet } from "react-native";

const appStyle = StyleSheet.create({
  appWrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2196F3"
  },
  titleView: {
    marginTop: 150
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  tagline: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  formView: {
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20
  },
  input: {
    height: 50,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1
  },
  button: {
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5
  },
  buttonText: {
    padding: 15,
    color: "#2196F3"
  },
  result: {
    fontSize: 17,
    marginBottom: 5,
    color: "white"
  },
  error: {
    fontSize: 20,
    color: "white"
  }
});

export default appStyle;
