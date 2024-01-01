import { StyleSheet, Platform } from "react-native";
const OS = Platform.OS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
    paddingTop: "13%",
  },
  bodyContainer: {
    // backgroundColor: "red",
    // marginTop: 20,
    // alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    marginTop: "5%",
    alignSelf: "center",
  },
  titleContainer: {
    marginTop: "25%",
  },
  title1: {
    fontFamily: "bold",
    fontSize: 24,
    color: "#000",
    lineHeight: 30,
  },
  title2: {
    fontFamily: "bold",
    fontSize: 24,
    color: "#E97400",
    lineHeight: 30,
  },
  fieldsContainer: {
    marginTop: "25%",
  },
  textField: {
    backgroundColor: "red",
    height: 60,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.54)",
    borderWidth: 1,
    borderColor: "#E1E1E1",
    justifyContent: "center",
    paddingLeft: 20,
  },
  textField2: {
    backgroundColor: "red",
    height: 60,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.54)",
    borderWidth: 1,
    borderColor: "#E1E1E1",
    justifyContent: "center",
    paddingLeft: 20,
    marginTop: 21,
  },
  textInput: {
    height: 60,
  },
  btnContainer: {
    marginTop: OS == "ios" ? "45%" : "30%",
  },
  btn: {
    height: 63,
    backgroundColor: "#E97400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontFamily: "regular",
    fontSize: 16,
    color: "#FFF",
    lineHeight: 20,
  },
});
export default styles;
