import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackIcon } from "../../../assets/svgs/svg";

import styles from "./Styles";

const Header = ({ title, iconContainerStyles }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={[styles.actionsContainer]}>
        <View style={[styles.iconContainer, iconContainerStyles]}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </View>
  );
};
export default Header;
