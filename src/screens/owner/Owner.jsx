import React from "react";
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

const OwnerScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text style={{ alignSelf: "center", fontSize: 20 }}>Owner</Text>
    </View>
  );
};

export default OwnerScreen;
