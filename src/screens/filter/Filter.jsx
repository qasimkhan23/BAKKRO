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
import { Minus, Plus, Calendar } from "../../../assets/svgs/svg";
import Header from "../../components/header/Header";
import styles from "./Styles";
import PropertyCard from "../../components/propertyCard/PropertyCard";

const FilterScreen = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [rooms, setRooms] = useState(3);

  const [adults, setAdults] = useState(3);
  const [children, setChildrens] = useState(0);

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
        <Text styles={styles.zoneTitle}>Select Geographical Zones</Text>

        <View style={styles.zoneTagContainer}>
          {tagsData.map((item, index) => (
            <TouchableOpacity
              style={[
                activeIndex !== index ? styles.inactiveTag : styles.activeTag,
              ]}
              onPress={() => setActiveIndex(index)}
            >
              <Text
                style={
                  activeIndex !== index ? styles.tagText : styles.activeTagText
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
            <TouchableOpacity
              onPress={() => {
                if (rooms !== 0) {
                  setRooms(rooms - 1);
                }
              }}
            >
              <Minus />
            </TouchableOpacity>
            <Text style={styles.number}>{rooms}</Text>
            <TouchableOpacity
              onPress={() => {
                setRooms(rooms + 1);
              }}
            >
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
            <TouchableOpacity
              onPress={() => {
                if (adults !== 0) {
                  setAdults(adults - 1);
                }
              }}
            >
              <Minus />
            </TouchableOpacity>
            <Text style={styles.number}>{adults}</Text>
            <TouchableOpacity
              onPress={() => {
                setAdults(adults + 1);
              }}
            >
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
            <TouchableOpacity
              onPress={() => {
                if (children !== 0) {
                  setChildrens(children - 1);
                }
              }}
            >
              <Minus />
            </TouchableOpacity>
            <Text style={styles.number}>{children}</Text>
            <TouchableOpacity
              onPress={() => {
                setChildrens(children + 1);
              }}
            >
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* options container view  ends here*/}
    </ScrollView>
  );
};

export default FilterScreen;
