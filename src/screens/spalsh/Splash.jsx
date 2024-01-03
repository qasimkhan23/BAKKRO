import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Platform } from "react-native";
import Swiper from "react-native-swiper";
import { Logo } from "../../../assets/svgs/svg";
const OS = Platform.OS;

const SplashScreen = ({ navigation }) => {
  const handlePress = () => {
      navigation.navigate("OtpSenderStack", {
        screen: "OtpSenderScreen"
      });
  };

  return (
    <Swiper
      loop={false}
      paginationStyle={{ bottom: 30 }}
      dotColor="white"
      activeDotColor="#E97400"
      dotStyle={styles.paginationDot}
      activeDotStyle={styles.activePaginationDot}
    >
      <View style={styles.slide}>
        <Image
          source={require("../../../assets/SplashImages/IMG_3388.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.content}>
          <Text style={styles.text}>Trouvez un appartement ou une maison en vente ou en location
          </Text>
        </View>

      </View>

      <View style={styles.slide}>
        <Image
          source={require("../../../assets/SplashImages/1373303234-612x61.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.content}>
          <Text style={styles.text}>Trouvez un hebergement de manière simple rapide et sécurisée
          </Text>
        </View>

      </View>

      <View style={styles.slide}>
        <Image
          source={require("../../../assets/SplashImages/IMG_33841.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.content}>
          <Text style={styles.text}>Estimer la valeur
            de mon bien
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress()}>
            <Text style={styles.btnText}>Commencer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  content: {
    marginTop: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: "8%",
    backgroundColor: "rgba(241, 209, 184 , 0.625)"
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  paginationDot: {
    width: 12, // Ajustez cette valeur pour augmenter la taille des points
    height: 12, // Ajustez cette valeur pour augmenter la taille des points
    borderRadius: 6, // Assurez-vous que la bordure est la moitié de la taille pour obtenir un cercle
    marginHorizontal: 2, // Ajustez cet espace entre les points si nécessaire
  },
  activePaginationDot: {
    width: 35, // Ajustez cette valeur pour la longueur de la dot active
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },

  btnContainer: {
    position: "absolute",
    bottom: 90

  },
  btn: {
    height: 60,
    width: 240,
    backgroundColor: "#E97400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "regular",
    fontSize: 20,
    color: "#FFF",
  },
});

export default SplashScreen;
