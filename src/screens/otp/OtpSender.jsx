import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import CountryPicker from 'react-native-country-picker-modal';
import { Logo } from "../../../assets/svgs/svg";
import 'react-native-gesture-handler';

const OtpSenderScreen = ({ navigation }) => {

  const [selectedCountry, setSelectedCountry] = useState({ cca2: 'CI', callingCode: '225' });

  const handleLogin = () => {
    navigation.navigate("BottomStack", {
      screen: "Home",
      params: {
        screen: "HomeScreen"
      },
    });
  };
 
  return (
    <View style={styles.container}>
      <View >
        <Logo />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>ENTREZ VOTRE</Text>
        <Text style={styles.title2}>NUMÉRO DE TÉLÉPHONE</Text>
        <Text style={styles.description}>Nous vous enverrons un code de confirmation à celui-ci</Text>
        {/* <Text style={styles.subtitle}>Entrez le numéro de téléphone</Text> */}
        <View style={styles.inputContainer}>
          <CountryPicker
            {...{
              onSelect: (country) => setSelectedCountry(country),
              countryCode: selectedCountry?.cca2 || 'US', // Code par défaut, ici les États-Unis
              withCountryNameButton: false, // Désactive l'affichage du nom du pays
              withCallingCode: false, // Désactive l'affichage du code de pays
            }} />
          <TextInput
            id="telVerification" 
            name="telVerification"
            style={styles.input}
            placeholder="Numéro de téléphone"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
    },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 137, // Ajuste la largeur selon tes besoins
    height: 85, // Ajuste la hauteur selon tes besoins
  },
  section: {
    width: '98%', // Ajuste la largeur de la section selon tes besoins
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 8,
    // color: "white"
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "orange"
  },
  subtitle: {
    fontSize: 24,
    // color: "white",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    // color: "white"
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
  BoutonPosition: {
    position: 'absolute',
    bottom: 70,
  }


})




export default OtpSenderScreen;
