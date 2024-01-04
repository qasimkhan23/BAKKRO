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
  Minus,
  Stars,
  MainProfileImage,
  Location,
} from "../../../assets/svgs/svg";
import styles from "./Styles";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";
import ListingCard from "../../components/listingCard/ListingCard";

const AgentProfileScreen = ({ navigation }) => {
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
      <Header title={"Agent Profile"} iconContainerStyles={{ flex: 0.5 }} />

      <View style={styles.profileInfoContainer}>
        <MainProfileImage />
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text style={styles.agentName}>Louisa Wilson</Text>
          <Text style={styles.designation}>(Agent)</Text>
        </View>
        <View style={styles.ratingsContainer}>
          <Stars />
          <Text style={styles.ratings}>(2450)</Text>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => setCurrentActiveTab(1)}
          style={currentActiveTab == 1 ? styles.activeTab : styles.inactiveTab}
        >
          <Text
            style={
              currentActiveTab == 1
                ? styles.activeTabText
                : styles.inactiveTabText
            }
          >
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentActiveTab(2)}
          style={currentActiveTab == 2 ? styles.activeTab : styles.inactiveTab}
        >
          <Text
            style={
              currentActiveTab == 2
                ? styles.activeTabText
                : styles.inactiveTabText
            }
          >
            Listings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentActiveTab(3)}
          style={currentActiveTab == 3 ? styles.activeTab : styles.inactiveTab}
        >
          <Text
            style={
              currentActiveTab == 3
                ? styles.activeTabText
                : styles.inactiveTabText
            }
          >
            Reviews
          </Text>
        </TouchableOpacity>
      </View>

      {currentActiveTab == 2 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {searchData.map((item, index) => (
            <ListingCard
              key={item.id}
              details={{ ...item, index }}
              customStyles={{ marginBottom: 20 }}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default AgentProfileScreen;
