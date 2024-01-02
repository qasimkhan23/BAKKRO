import React, { useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./Styles";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';

const OtpSender = ({ navigation }) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  // ...
const recaptchaVerifier = useRef(null);

const sendVerification = () => {
  const phoneProvider = new firebase.auth.PhoneAuthProvider();
  phoneProvider
    .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
    .then(setVerificationId);
  setPhoneNumber('');
}

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId, code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        setCode('')
      })
      .catch((error) => {
        // show an alert
      })
    Alert.alert(
      'login is goo'
    )
  }

  return (
    < View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      < Text style={styles.otpText}>
        Login using OTP
      </Text>
      <TextInput
        placeholder='Phone Number With Country code'
        onChangeText={setPhoneNumber}
        keyboardType='phone-pad'
        autoCompleteType='tel'
        style={styles.TextInput}
      />

      <TouchableOpacity style={styles.sendCode} onPress={sendVerification}>
        <Text style={styles.buttonText}>send Verification</Text>
      </TouchableOpacity>

      <TextInput
        placeholder='Phone Number With Country code'
        onChangeText={setCode}
        keyboardType='number-pad'
        style={styles.TextInput}
      />
      <TouchableOpacity style={styles.sendVerification} onPress={confirmCode}>
        <Text style={styles.buttonText}>confirm Verification</Text>
      </TouchableOpacity>

    </View>
  )

};  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ' #000',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInput: {
      paddingTop: 40,
      paddingBottom: 20,
      paddingHorizontal: 20,
      fontSize: 24,
      borderBottomColor: '#fff',
      borderBottomWidth: 2,
      marginBottom: 20,
      textAlign: 'center',
      color: '#fff'
    },
    sendVerification: {
      padding: 20,
      backgroundColor: '#3498b',
      borderRadius: 10
    },
    sendCode: {
      padding: 20,
      backgroundColor: '#9b59b6',
      borderRadius: 10,
    }
  })
  
  
  export default OtpSender;
  