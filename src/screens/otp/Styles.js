import { StyleSheet, Platform } from "react-native";
const OS = Platform.OS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
    paddingTop: "13%",
  },
  logoContainer: {
    justifyContent: "center",
    marginTop: "5%",
    alignSelf: "center",
  },
  titleContainer: {
    marginTop: "25%",
  },
  title1: {
    fontFamily: "bold",
    fontSize: 24,
    color: "#000",
    lineHeight: 30,
  },
  title2: {
    fontFamily: "bold",
    fontSize: 24,
    color: "#E97400",
    lineHeight: 30,
  },
  description: {
    paddingTop:10,
    fontSize: 16,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 8,
  },
  fieldsContainer: {
    marginTop: "20%",
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  btnContainer: {
    marginTop: OS == "ios" ? "45%" : "30%",
  },
  btn: {
    height: 63,
    backgroundColor: "#E97400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontFamily: "regular",
    fontSize: 16,
    color: "#FFF",
    lineHeight: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  input: {
    flex: 1,
    width: 323,
    height: 60,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginLeft: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    width:"98%",
    marginBottom:100
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
  },
});
export default styles;
