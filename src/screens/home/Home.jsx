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
import { Profile, Currency, HomeMainImage } from "../../../assets/svgs/svg";
import styles from "./Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ route }) => {
  console.log("route", route);
  const { firstName, lastName } = route.params;
  return (
    <View style={[styles.container]}>
      <View style={styles.bodyContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.hello}>
              Hello, <Text style={styles.name}>Jenny</Text>
            </Text>
            <Text style={styles.welcome}>Welcome to Bakkro</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Profile />
            <View style={styles.currencyContainer}>
              <Currency />
              <Text style={styles.balance}>0.00</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.wishText}>Wish You</Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.accommodationBtn}>
              <Text style={styles.accommodationBtnText}>
                Find accommodation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.purchaseBtn}>
              <Text style={styles.purchaseBtnText}>Purchase/Rental</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            style={styles.ImageBackground}
            source={require("../../../assets/HomeMainImage.png")}
          >
            <Text style={styles.mainImageText}>White Mordern House</Text>
            <Text style={styles.mainImageAddress}>
              Broad way street ,<Text style={styles.country}>America</Text>
            </Text>
          </ImageBackground>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
