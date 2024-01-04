import { StyleSheet, Platform, Dimensions } from "react-native";
const OS = Platform.OS;
const { width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  bodyContainer: {
    flex: 1,
    padding: 19,
  },

  item: {
    width: screenWidth,
    height: screenWidth - 40,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {},
  title: {
    fontFamily: "bold",
    fontSize: 21,
    color: "#000",
  },
  desc: {
    fontFamily: "light",
    fontSize: 12,
    color: "#000",
  },
  descContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  price: {
    fontFamily: "bold",
    fontSize: 22,
    color: "#E97400",
  },
  priceText: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#3A3A47",
    alignSelf: "flex-end",
  },
  agentInfoContainer: {
    marginTop: 19,
    paddingHorizontal: 19,
    height: 76,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  agentInfo: {
    flexDirection: "row",
  },
  agentNameContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    marginLeft: 8,
  },
  agentName: {
    fontFamily: "bold",
    fontSize: 13,
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
  ratings: {
    fontFamily: "regular",
    fontSize: 10,
    color: "#000",
    marginLeft: 2,
  },
  aboutInfoContainer: {
    marginTop: 29,
  },
  aboutTitle: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
  },
  aboutDesc: {
    fontFamily: "light",
    fontSize: 13,
    color: "#676767",
    marginTop: 10,
  },
  readMore: {
    fontFamily: "bold",
    fontSize: 13,
    color: "#E97400",
  },
  propertyDetailsContainer: {
    flexDirection: "row",
    marginTop: 29,
  },
  propertyTag: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sizeText: {
    fontFamily: "bold",
    fontSize: 13,
    color: "#3A3A47",
    marginLeft: 7,
  },
  propertyTagInfoContaner: {
    flexDirection: "row",
    alignItems: "center",
  },
  amenitiesContainer: {
    marginTop: 18,
  },
  amText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
  },
  amenitiesTagContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  amTag: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    height: 42,
    borderRadius: 42,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 38,
  },
  amIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  amIconText: {
    fontFamily: "bold",
    fontSize: 13,
    color: "#3A3A47",
    marginTop: 8,
  },
  locationContainer: {
    marginTop: 29,
  },
  locationText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#3A3A47",
  },
  mapImage: {
    marginTop: 15,
    alignSelf: "center",
  },

  btnContainer: {
    marginTop: 38,
    // marginBottom: 24,
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
  bookingBtnContainer: {
    marginTop: 15,
    marginBottom: 27,
  },
  bookingBtn: {
    height: 63,
    backgroundColor: "#E97400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  bookingBtnText: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#FFF",
    lineHeight: 20,
  },
});
export default styles;
