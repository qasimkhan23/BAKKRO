import { StyleSheet, Platform } from "react-native";

const OS = Platform.OS;

const styles = StyleSheet.create({
  header: {
    display: "flex",
  },
  headerText: {
    fontFamily: "bold",
    fontSize: 20,
    color: "#000",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flex: 0.62,
    alignItems: "flex-start",
  },
  backIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
  },
});

export default styles;
