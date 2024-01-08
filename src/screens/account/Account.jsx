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
import {
  History,
  Profile3,
  Right,
  Location,
  ProfileImage2,
  Currency,
  Visits,
  Payments,
  Feedback,
  General,
  Data,
  Settings,
} from "../../../assets/svgs/svg";
import styles from "./Styles";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";
import ListingCard from "../../components/listingCard/ListingCard";

const AccountScreen = ({ navigation }) => {
  const [currentActiveTab, setCurrentActiveTab] = useState(2);
  let searchData = [
    {
      id: 1,
      image: require("../../../assets/Cottage.png"),
      title: "Willowcroft Cottage",
      desp: "4517 Washington Ave. Manchester 39495",
      liked: true,
      price: "$750.90",
      Icon: <Location />,
    },
    {
      id: 2,
      image: require("../../../assets/Diamonds.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      price: "$952.90",
      liked: false,
      Icon: <Location />,
    },
    {
      id: 3,
      image: require("../../../assets/Cottage.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      liked: false,
      price: "$750.90",
      Icon: <Location />,
    },
  ];
  return (
    <View style={[styles.container]}>
      <Header title={"Account"} />

      <View style={styles.profileInfoContainer}>
        <ProfileImage2 />
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text style={styles.name}>Jenny Angelina</Text>
        </View>
        <View style={styles.ratingsContainer}>
          <Currency />
          <Text style={styles.balance}>0.00</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity style={styles.actionTab}>
              <View style={styles.tabInfo}>
                <Profile3 width={20} height={20} />
                <Text style={styles.tabText}>Profile Management</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionTab, styles.tabMargin]}
              onPress={() => navigation.navigate("MyBookingsScreen")}
            >
              <View style={styles.tabInfo}>
                <History width={20} height={20} />
                <Text style={styles.tabText}>Reservation History</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <Visits width={20} height={20} />
                <Text style={styles.tabText}>My Visits</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionTab, styles.tabMargin]}
              onPress={() => navigation.navigate("RechargeAccountScreen")}
            >
              <View style={styles.tabInfo}>
                <Payments width={20} height={20} />
                <Text style={styles.tabText}>My Payments</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <Feedback width={20} height={20} />
                <Text style={styles.tabText}>Feedback / Support</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <General width={20} height={20} />
                <Text style={styles.tabText}>General Conditions of Use</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <Data width={20} height={20} />
                <Text style={styles.tabText}>
                  Data Protection/Privacy Policy
                </Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionTab, styles.tabMargin]}
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              <View style={styles.tabInfo}>
                <Settings width={20} height={20} />
                <Text style={styles.tabText}>Settings</Text>
              </View>
              <Right />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AccountScreen;
