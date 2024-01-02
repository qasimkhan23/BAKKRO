import { StyleSheet, Platform } from "react-native";
const OS = Platform.OS;

const styles = StyleSheet.create({
  cardContainer: {
    // flexDirection: "row",
  },
  card: {
    marginTop: 12,
    marginBottom: 35,
    width: 153,
    backgroundColor: "white",
    borderRadius: 4,
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
  price: {
    fontFamily: "bold",
    fontSize: 12,
    color: "#000",
  },
  image: {
    height: 109,
    width: 153,
    alignItems: "flex-end",
    padding: 4,
  },
});
export default styles;
