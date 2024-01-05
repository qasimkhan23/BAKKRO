import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import CountryPicker from 'react-native-country-picker-modal';
import { Logo } from "../../../assets/svgs/svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./Styles";
import 'react-native-gesture-handler';

const OtpSenderScreen = ({ navigation }) => {

  const [selectedCountry, setSelectedCountry] = useState({ cca2: 'CI', callingCode: '225' });

  const handleLogin = () => {
    navigation.navigate("OtpConfirmStack", {
      screen: "OtpConfirmScree"
    })
  };
 
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>ENTREZ VOTRE</Text>
        <Text style={styles.title2}>NUMÉRO DE TÉLÉPHONE</Text>
        <Text style={styles.description}>Nous vous enverrons un code de confirmation à celui-ci</Text>
        <View style={styles.fieldsContainer}>
          <CountryPicker
            {...{
              onSelect: (country) => setSelectedCountry(country),
              countryCode: selectedCountry?.cca2 || 'US',
              withCountryNameButton: false,
              withCallingCode: false,
              withFilter: true, // Activer la recherche des indicatifs
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
          <Text style={styles.btnText}>Continuer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default OtpSenderScreen;
