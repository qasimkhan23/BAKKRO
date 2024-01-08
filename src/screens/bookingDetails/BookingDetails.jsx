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
import {
  Minus,
  Location,
  BookingDetails,
  Edit,
  Seperator,
} from "../../../assets/svgs/svg";
import styles from "./Styles";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";
import ListingCard from "../../components/listingCard/ListingCard";

const BookingsDetailsScreen = ({ navigation }) => {
  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <View style={[styles.container]}>
      <Header title={"Booking Details"} iconContainerStyles={{ flex: 0.4 }} />

      <View style={styles.deatilsCard}>
        <View style={styles.detailsContainer}>
          <BookingDetails />
          <View style={styles.info}>
            <Text style={styles.title}>Sunnyside Manor</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Location />
              <Text style={styles.desc}>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Text>
            </View>
            <Text style={styles.date}>26, jan 2023</Text>
            <Text style={styles.name}>John doe</Text>
            <Text style={styles.price}>
              Price: <Text style={styles.priceValue}>$300/per month</Text>
            </Text>
          </View>
        </View>
        <Edit />
      </View>

      <Text style={styles.mainHeading}>Booking details</Text>

      <ScrollView
        style={styles.valuesContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.values}>
          <Text style={styles.valueText1}>Date</Text>
          <Text style={styles.valueText2}>30 Sep 2023</Text>
        </View>

        <View style={[styles.values, { marginTop: 25 }]}>
          <Text style={styles.valueText1}>Owner name</Text>
          <Text style={styles.valueText2}>John doe</Text>
        </View>

        <View style={[styles.values, { marginTop: 25 }]}>
          <Text style={styles.valueText1}>Agent name</Text>
          <Text style={styles.valueText2}>$300</Text>
        </View>

        <View style={[styles.values, { marginTop: 25 }]}>
          <Text style={styles.valueText1}>Property Type</Text>
          <Text style={styles.valueText2}>Apartment</Text>
        </View>

        <View style={[styles.values, { marginTop: 25 }]}>
          <Text style={styles.valueText1}>Period</Text>
          <Text style={styles.valueText2}>3 months</Text>
        </View>

        <View style={[styles.values, { marginTop: 25 }]}>
          <Text style={styles.valueText1}>Monthly Price</Text>
          <Text style={styles.valueText2}>$300</Text>
        </View>

        <View style={[styles.values, { marginTop: 25 }]}>
          <Text style={styles.valueText1}>Vat</Text>
          <Text style={styles.valueText2}>$50</Text>
        </View>
        <Seperator style={{ marginTop: 25 }} />
        <View style={[styles.values, { marginTop: 25 }]}>
          <Text style={styles.valueText1}>Total</Text>
          <Text style={styles.total}>$950</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingsDetailsScreen;
