import { StyleSheet, Platform } from "react-native";
const OS = Platform.OS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingLeft: 25,
    paddingRight: 25,

    paddingTop: "20%",
  },
  bodyContainer: {
    flex: 1,
  },
  deatilsCard: {
    marginTop: 37,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    flexDirection: "row",
    flex: 1,
  },
  info: {
    marginLeft: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: 17,
    color: "#000",
  },
  desc: {
    fontFamily: "light",
    fontSize: 10,
    color: "#000",
    marginLeft: 5,
    maxWidth: "70%",
  },
  date: {
    fontFamily: "regular",
    fontSize: 11,
    color: "#000",
    marginTop: 5,
  },
  name: {
    fontFamily: "regular",
    fontSize: 11,
    color: "#000",
    marginTop: 5,
  },
  price: {
    fontFamily: "light",
    fontSize: 10,
    color: "#000",
    marginTop: 5,
  },
  priceValue: {
    fontFamily: "bold",
    fontSize: 10,
    color: "#E97400",
    marginTop: 5,
  },
  mainHeading: {
    fontFamily: "bold",
    fontSize: 20,
    color: "#000",
    marginTop: 32,
  },
  valuesContainer: {
    marginTop: 25,
  },
  values: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valueText1: {
    fontFamily: "regular",
    fontSize: 16,
    color: "#000",
  },
  valueText2: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#000",
  },
  total: {
    fontFamily: "bold",
    fontSize: 24,
    color: "#E97400",
  },
  btnContainer: {
    marginTop: 35,
    marginBottom: 27,
  },
  btn: {
    height: 63,
    backgroundColor: "#E97400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#FFF",
    lineHeight: 20,
  },
});
export default styles;
