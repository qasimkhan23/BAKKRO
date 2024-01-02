import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import { Logo } from "../../../assets/svgs/svg";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    // Simulation de la navigation automatique après 5 secondes
    const timeoutId = setTimeout(() => {
      // Navigue vers TonEcran.js
      navigation.navigate("OtpSenderStack", {
        screen: "OtpSenderScreen"
      });
    }, 3000);

    return () => clearTimeout(timeoutId); // Annule le timeout si le composant est démonté avant le délai
  }, [navigation]);
  useEffect(() => {
    //  Naviguer vers l'écran d'authentification après 3 secondes
    const timer = setTimeout(() => {
      navigation.navigate("OtpSenderStack", {
        screen: "OtpSenderScreen"
      });
    }, 3000);

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté avant la fin du délai
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View >
        <Logo />
      </View>
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    }
  })




export default SplashScreen;
