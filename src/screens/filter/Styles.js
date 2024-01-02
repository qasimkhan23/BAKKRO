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
    display: "flex",
    flex: 1,
    // backgroundColor: "red",
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
    height: 31,
    backgroundColor: "rgba(238, 238, 238, 0.38)",
    borderRadius: 36,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 8,
    marginRight: 10,
    // backgroundColor: "red",
  },
  tagText: {
    fontFamily: "bold",
    fontSize: 10,
    color: "rgba(58, 58, 71, 0.77)",
  },

  activeTag: {
    height: 31,
    backgroundColor: "#E97400",
    borderRadius: 36,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 8,
    marginRight: 10,
  },
  activeTagText: {
    fontFamily: "bold",
    fontSize: 10,
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
    // alignItems: "center",
  },
  btn: {
    height: 63,
    // width: 141,

    backgroundColor: "#E97400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
  },
  btnText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#FFF",
    lineHeight: 20,
  },
  locationPickerView: {},
  purchaseText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
    marginTop: 17,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 11,
    backgroundColor: "#FFF",
    // marginBottom: 16,
    // height: 65,
  },
  dropdownText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
    // marginLeft: 12,
  },
  dropdownDataContainer: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    backgroundColor: "#FFF",
    // color: "#EEE",
  },
  surfaceAreaContainer: {
    marginTop: 24,
  },
  minimumArea: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
  },
  maximumArea: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
  },
  minimumAreaInput: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    height: 56,
    paddingHorizontal: 22,
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 11,
  },
  textInput: {
    height: 56,
  },
  maximumAreaInput: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    height: 56,
    paddingHorizontal: 22,
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 11,
  },
  workshopContainer: {
    marginTop: 40,
  },
  workshopText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
  },
  workshopTagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  inactiveWorkshopTag: {
    height: 51,
    width: 71,
    backgroundColor: "rgba(238, 238, 238, 0.38)",
    borderRadius: 10,
    paddingLeft: 19,
    paddingRight: 19,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 8,
    marginRight: 13,
    marginTop: 12,
    // backgroundColor: "red",
  },
  inctiveTagText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "rgba(58, 58, 71, 0.77)",
  },

  activeWorkshopTag: {
    marginTop: 12,

    height: 51,
    width: 71,
    backgroundColor: "#E97400",
    borderRadius: 10,
    paddingLeft: 19,
    paddingRight: 19,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 8,
    marginRight: 13,
  },
  activeWorkshopTagText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#FFF",
  },
  videoText: {
    fontFamily: "bold",
    fontSize: 14,
    color: "#3A3A47",
  },
  videoOptionsContainer: {
    marginTop: 25,
  },
});
export default styles;
