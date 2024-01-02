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
  dateContainer: {
    marginTop: 27,
  },
  dateTitle: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
  },
  date: {
    marginTop: 9,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    padding: 20,
    justifyContent: "center",
  },
  dateTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#000",
  },
  zonesContainer: {
    marginTop: 26,
  },
  zoneTitle: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
  },
  zoneTagContainer: {
    marginTop: 23,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inactiveTag: {
    height: 41,
    backgroundColor: "rgba(238, 238, 238, 0.38)",
    borderRadius: 36,
    paddingLeft: 19,
    paddingRight: 19,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 8,
    marginRight: 13,
    // backgroundColor: "red",
  },
  tagText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "rgba(58, 58, 71, 0.77)",
  },

  activeTag: {
    height: 41,
    backgroundColor: "#E97400",
    borderRadius: 36,
    paddingLeft: 19,
    paddingRight: 19,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 8,
    marginRight: 13,
  },
  activeTagText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#FFF",
  },
  moreZones: {
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  moreZonesText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#E97400",
  },
  optionsContainer: {
    marginTop: 22,
  },
  optionText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
  },

  optionsView: {
    marginTop: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  optionsViewAdults: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  room: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
  },
  counterView: {
    height: 41,
    width: 101,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // flex: 0.3,
  },
  number: {
    fontFamily: "regular",
    fontSize: 21,
    color: "#000",
  },
  ageLimit: {
    fontFamily: "regular",
    fontSize: 10,
    color: "rgba(58, 58, 71, 0.69)",
  },

  btnContainer: {
    marginTop: 35,
    marginBottom: 24,
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
