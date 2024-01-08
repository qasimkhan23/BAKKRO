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
  HelpSupport,
  ProvicyPolicy,
  Right,
  DarkMode,
  Languages,
  Logout,
  Visits,
  Payments,
  Feedback,
  General,
  Data,
  Notification,
} from "../../../assets/svgs/svg";
import styles from "./Styles";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";
import ListingCard from "../../components/listingCard/ListingCard";

const SettingsScreen = ({ navigation }) => {
  const [currentActiveTab, setCurrentActiveTab] = useState(2);

  return (
    <View style={[styles.container]}>
      <Header title={"Settings"} />

      <View style={styles.listContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity style={styles.actionTab}>
              <View style={styles.tabInfo}>
                <Notification />
                <Text style={styles.tabText}>Notification</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <Languages />
                <Text style={styles.tabText}>languages</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <DarkMode />
                <Text style={styles.tabText}>Dark mode</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <ProvicyPolicy />
                <Text style={styles.tabText}>Privacy policy</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <HelpSupport />
                <Text style={styles.tabText}>Help & Support</Text>
              </View>
              <Right />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionTab, styles.tabMargin]}>
              <View style={styles.tabInfo}>
                <Logout />
                <Text style={styles.tabText}>Log Out</Text>
              </View>
              <Right />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsScreen;
