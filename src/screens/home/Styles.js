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
    // backgroundColor: "red",

    flex: 1,
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
  news: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
    marginTop: 50,
  },
  cardsContainer: { marginTop: 12, marginBottom: 35 },

  card: {
    marginTop: 12,
    marginBottom: 35,
    width: 130,
    backgroundColor: "white",
    borderRadius: 4,
    // height: 300,
    // flex: 1,
    // padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTextContainer: {
    padding: 11,
  },
  cardTitle: {
    fontFamily: "bold",
    fontSize: 12,
    color: "#000",
  },
  cardDesp: {
    fontFamily: "light",
    fontSize: 10,
    color: "#000",
    marginTop: 2,
  },
});
export default styles;
