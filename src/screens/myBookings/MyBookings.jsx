import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { Minus, Plus, Delete, Location } from "../../../assets/svgs/svg";
import styles from "./Styles";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";
import ListingCard from "../../components/listingCard/ListingCard";
import Swipeable from "react-native-swipeable";

const MyBookingsScreen = ({ navigation }) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);

  const rightButtons = [
    <TouchableOpacity
      style={{
        backgroundColor: "#FF5C00",
        height: 96,
        width: 85,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
      }}
    >
      <Delete />
    </TouchableOpacity>,
  ];

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

    {
      id: 4,
      image: require("../../../assets/Cottage.png"),
      title: "Willowcroft Cottage",
      desp: "4517 Washington Ave. Manchester 39495",
      liked: true,
      price: "$750.90",
      Icon: <Location />,
    },
    {
      id: 5,
      image: require("../../../assets/Diamonds.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      price: "$952.90",
      liked: false,
      Icon: <Location />,
    },
    {
      id: 6,
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
      <Header title={"My Bookings"} iconContainerStyles={{ flex: 0.48 }} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setActiveBtn(1)}
          style={activeBtn == 1 ? styles.activeBtn : styles.inactiveBtn}
        >
          <Text
            style={
              activeBtn == 1 ? styles.activeBtnText : styles.inactiveBtnText
            }
          >
            Past Booking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveBtn(2)}
          style={activeBtn == 2 ? styles.activeBtn : styles.inactiveBtn}
        >
          <Text
            style={
              activeBtn == 2 ? styles.activeBtnText : styles.inactiveBtnText
            }
          >
            Upcoming Bookings
          </Text>
        </TouchableOpacity>
      </View>

      {activeBtn == 1 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 27 }}>
            {searchData.map((item, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("BookingsDetailsScreen")}
              >
                <ListingCard
                  key={item.id}
                  details={{ ...item, index }}
                  customStyles={{ marginBottom: 15 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      {activeBtn == 2 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 27 }}>
            {searchData.map((item, index) => (
              <TouchableOpacity>
                <ListingCard
                  key={item.id}
                  details={{ ...item, index }}
                  customStyles={{ marginBottom: 15 }}
                  editIcon
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MyBookingsScreen;
