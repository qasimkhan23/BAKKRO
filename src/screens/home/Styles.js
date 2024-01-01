import { StyleSheet, Platform } from "react-native";
const OS = Platform.OS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
    paddingTop: "20%",
  },
  bodyContainer: {
    // backgroundColor: "red",
    // marginTop: "10%",
    // alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    // flexDirection: "row",
  },
  hello: {
    fontFamily: "regular",
    fontSize: 23,
    color: "#000",
  },
  name: {
    fontFamily: "bold",
    fontSize: 23,
    color: "#000",
  },
  welcome: {
    fontFamily: "light",
    fontSize: 17,
    color: "#000",
  },
  profileImageContainer: {},
  currencyContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  balance: {
    fontFamily: "bold",
    fontSize: 12,
    color: "#000",
  },
  wishText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  accommodationBtn: {
    height: 40,
    backgroundColor: "#E97400",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 19,
  },
  accommodationBtnText: {
    fontFamily: "bold",
    fontSize: 13,
    color: "#FFF",
  },
  purchaseBtn: {
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E97400",
    paddingHorizontal: 28,
  },
  purchaseBtnText: {
    fontFamily: "bold",
    fontSize: 13,
    color: "#E97400",
  },
  ImageBackground: {
    height: 385,
    marginTop: 17,
    justifyContent: "flex-end",
  },
  mainImageText: {
    fontFamily: "bold",
    fontSize: 23,
    color: "#FFF",
    maxWidth: "70%",
    marginLeft: 16,
  },
  mainImageAddress: {
    fontFamily: "regular",
    fontSize: 10,
    color: "#FFF",
    marginLeft: 16,
    marginBottom: 17,
  },
  country: {
    fontFamily: "bold",
    fontSize: 10,
    color: "#FFF",
    marginLeft: 16,
    marginBottom: 17,
  },
});
export default styles;
