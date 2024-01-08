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
  profileInfoContainer: {
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: "bold",
    fontSize: 18,
    color: "#000",
  },
  designation: {
    fontFamily: "regular",
    fontSize: 10,
    color: "#000",
    marginLeft: 2,
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  balance: {
    fontFamily: "regular",
    fontSize: 15,
    color: "#000",
    marginLeft: 2,
  },
  listContainer: {
    marginTop: 48,
    flex: 1,
  },
  inactiveTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9E4E4",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inactiveTabText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#808080",
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#E97400",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  activeTabText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#E97400",
  },
  actionTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#6B6F73",
    marginLeft: 11,
  },
  tabInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabMargin: {
    marginTop: 24,
  },
});
export default styles;
