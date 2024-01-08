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
    marginTop: 51,
  },
  choose: {
    fontFamily: "bold",
    fontSize: 20,
    color: "#E97400",
  },
  paymentCard: {
    height: 181,
    flex: 1,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 6,
  },
  premiumPaymentCard: {
    height: 181,
    flex: 1,
    marginLeft: 22,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 6,
  },
  cardHead: {
    backgroundColor: "#000",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 80,
    justifyContent: "center",
  },
  paymentText: {
    fontFamily: "bold",
    fontSize: 18,
    color: "#FFF",
    marginLeft: 11,
    marginRight: 3,
  },
  toursText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#000",
  },
  choosePaymentText: {
    fontFamily: "bold",
    fontSize: 20,
    color: "#E97400",
    marginTop: 16,
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
