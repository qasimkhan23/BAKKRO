import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import RootNavigator from "./navigation/RootNavigator";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "ViewPropTypes will be removed from React Native",
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);
export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Oxygen-Regular.ttf"),
    bold: require("./assets/fonts/Oxygen-Bold.ttf"),
    light: require("./assets/fonts/Oxygen-Light.ttf"),
  });
  if (!fontsLoaded) {
    return;
  }

  return (
    <View style={styles.container}>
      <RootNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
