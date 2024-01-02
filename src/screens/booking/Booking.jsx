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
import { Minus, Plus, Calendar } from "../../../assets/svgs/svg";
import styles from "./Styles";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";

const BookingScreen = ({ navigation }) => {
  const tagsData = [
    {
      title: "Abobo",
      status: "inactive",
    },
    {
      title: "Adjamé",
      status: "active",
    },
    {
      title: "Bingerville",
      status: "inactive",
    },
    {
      title: "Anyama",
      status: "inactive",
    },
    {
      title: "Attécoubé",
      status: "inactive",
    },
    {
      title: "Koumassi",
      status: "inactive",
    },
    {
      title: "Treichville",
      status: "inactive",
    },
    {
      title: "Prt bouët",
      status: "inactive",
    },
    {
      title: "Cocody",
      status: "inactive",
    },
    {
      title: "Marcory",
      status: "inactive",
    },
    {
      title: "Songon",
      status: "inactive",
    },
    {
      title: "Yopougon",
      status: "inactive",
    },
    {
      title: "Plateau",
      status: "inactive",
    },
  ];
  return (
    <View style={[styles.container]}>
      <Header title={"Booking"} />
      <ScrollView
        style={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* date container view */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateTitle}>Select the date</Text>
          <TouchableOpacity style={styles.date}>
            <View style={styles.dateTextContainer}>
              <Text style={styles.dateText}>29 december</Text>
              <Calendar />
            </View>
          </TouchableOpacity>
        </View>
        {/* date container view ends here */}

        {/* zones container view */}

        <View style={styles.zonesContainer}>
          <Text styles={styles.zoneTitle}>Select Geographical Zones ff</Text>

          <View style={styles.zoneTagContainer}>
            {tagsData.map((item, index) => (
              <TouchableOpacity
                style={[
                  item.status == "inactive"
                    ? styles.inactiveTag
                    : styles.activeTag,
                ]}
              >
                <Text
                  style={
                    item.status == "inactive"
                      ? styles.tagText
                      : styles.activeTagText
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.moreZones}>
            <TouchableOpacity>
              <Text style={styles.moreZonesText}>View more zones</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* zones container view  ends here*/}

        {/* options container view */}

        <View style={styles.optionsContainer}>
          <Text style={styles.optionText}>Select Options</Text>

          <View style={styles.optionsView}>
            <Text style={styles.room}>Rooms</Text>
            <View style={styles.counterView}>
              <TouchableOpacity>
                <Minus />
              </TouchableOpacity>
              <Text style={styles.number}>3</Text>
              <TouchableOpacity>
                <Plus />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.optionsViewAdults}>
            <View>
              <Text style={styles.room}>Adults</Text>
              <Text style={styles.ageLimit}>Ages 18 or above</Text>
            </View>

            <View style={styles.counterView}>
              <TouchableOpacity>
                <Minus />
              </TouchableOpacity>
              <Text style={styles.number}>3</Text>
              <TouchableOpacity>
                <Plus />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.optionsViewAdults}>
            <View>
              <Text style={styles.room}>Children</Text>
              <Text style={styles.ageLimit}>Ages 0 -17</Text>
            </View>

            <View style={styles.counterView}>
              <TouchableOpacity>
                <Minus />
              </TouchableOpacity>
              <Text style={styles.number}>0</Text>
              <TouchableOpacity>
                <Plus />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Search Booking</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* options container view  ends here*/}
      </ScrollView>
    </View>
  );
};

export default BookingScreen;
