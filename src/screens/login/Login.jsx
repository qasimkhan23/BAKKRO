import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Logo } from "../../../assets/svgs/svg";
import styles from "./Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = () => {
    navigation.navigate("BottomStack", {
      screen: "Home",
      params: {
        screen: "HomeScreen",
        params: { firstName, lastName },
      },
    });
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <ScrollView
        style={styles.bodyContainer}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>ENTER YOUR</Text>
          <Text style={styles.title2}>FIRST AND LAST NAME</Text>
        </View>

        <View style={styles.fieldsContainer}>
          <View style={styles.textField}>
            <TextInput
              style={styles.textInput}
              placeholder="First Name"
              onChangeText={(value) => setFirstName(value)}
              value={firstName}
            />
          </View>
          <View style={styles.textField2}>
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => setLastName(value)}
              placeholder="Last Name"
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
