import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import CheckBox from "expo-checkbox";
import {
  History,
  Profile3,
  Right,
  Location,
  FilledCheckbox,
  Currency,
  EmptyCheckbox,
  Payments,
  Feedback,
  General,
  Data,
  Settings,
  PaymentMethod,
  CirclePlus,
} from "../../../assets/svgs/svg";
import styles from "./Styles";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";
import ListingCard from "../../components/listingCard/ListingCard";

const RechargeAccountScreen = ({ navigation }) => {
  const [premiumValue, setpremiumValue] = useState(1000);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);

  const [premiumPlusValue, setPremiumPlusValue] = useState(6000);

  return (
    <View style={[styles.container]}>
      <Header
        title={"Insufficient credits"}
        iconContainerStyles={{ flex: 0.35 }}
      />

      <ScrollView
        style={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.choose}>I choose my pack</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.paymentCard}>
            <View style={styles.cardHead}>
              <Text style={styles.paymentText}>Prenium</Text>
            </View>
            <View style={{ padding: 11 }}>
              <Text style={styles.toursText}>20 Virtuals tours</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 32,
                }}
              >
                <CheckBox
                  color={toggleCheckBox1 ? "#E97400" : undefined}
                  disabled={false}
                  value={toggleCheckBox1}
                  onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                />
                <Currency />
                <Text>{premiumValue}</Text>
              </View>
            </View>
          </View>
          <View style={styles.premiumPaymentCard}>
            <View style={styles.cardHead}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.paymentText}>Prenium</Text>
                <CirclePlus />
              </View>
            </View>
            <View style={{ padding: 11 }}>
              <Text style={styles.toursText}>20 Virtuals tours</Text>
              <Text style={styles.toursText2}>1 physical visit </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 14,
                }}
              >
                <CheckBox
                  color={toggleCheckBox2 ? "#E97400" : undefined}
                  disabled={false}
                  value={toggleCheckBox2}
                  onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                />
                <Currency />
                <Text>{premiumPlusValue}</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.choosePaymentText}>I choose my payment method</Text>

        <View style={{ marginTop: 16 }}>
          <PaymentMethod />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
              {toggleCheckBox1 == true
                ? premiumValue
                : toggleCheckBox2 == true
                ? premiumPlusValue
                : null}{" "}
              I Recharge my account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RechargeAccountScreen;
