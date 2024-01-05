import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { Logo } from "../../../assets/svgs/svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./Styles";
import 'react-native-gesture-handler';

const OtpConfirmScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Pas besoin de Keyboard.dismiss() ici
    navigation.navigate("AuthStack", {
      screen: "LoginScreen"
    })
  };

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputs = Array(6).fill(0);

  const otpInputsRefs = otpInputs.map(() => useRef(null));

  const onOtpInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputsRefs[index + 1].current.focus();
    }
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
        <Text style={styles.title1}>ENTRER LE</Text>
        <Text style={styles.title2}>CODE DE VÉRIFICATION</Text>
        <Text style={styles.description}>Pour terminer le processus de validation, veuillez saisir le code à 4 chiffres ci-dessous.</Text>
        <Text style={styles.subtitle}>Mot de passe à usage unique (OTP)</Text>
        <View style={styles.otpContainer}>
          {otpInputs.map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={otp[index]}
              onChangeText={(text) => onOtpInputChange(index, text)}
              ref={otpInputsRefs[index]}
            />
          ))}
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

export default OtpConfirmScreen;
