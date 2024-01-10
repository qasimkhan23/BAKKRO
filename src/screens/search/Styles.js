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
  },
  searchContainer: {
    marginTop: 26,
    height: 60,
    backgroundColor: "#FCFCFC",
    borderWidth: 1,
    borderColor: "#E1E1E1",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  searchTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textSearch: {
    marginLeft: 12,
    fontFamily: "regular",
    fontSize: 16,
    color: "#8F8F8F",
    lineHeight: 20,
  },
  popularViewContainer: {
    marginTop: 26,
  },
  popularText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
  },
  mostViewedContainer: {
    // marginTop: 20,
    flex: 1,
  },
  mostViewsText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
  },
  modalMainView: {
    flex: 1,
    backgroundColor: "white",
    width: "105%",
    alignSelf: "flex-end",
    marginRight: -20,
    marginTop: -23,
    marginBottom: -20,
  },
  modalContainer: {
    marginTop: 25,
    padding: 25,
    flex: 1,
  },
  filterText: {
    fontFamily: "bold",
    fontSize: 20,
    color: "#000",
  },
  filterTextView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
export default styles;
