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
});
export default styles;
