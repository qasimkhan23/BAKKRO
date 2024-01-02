import React from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Filter, Search } from "../../../assets/svgs/svg";
import Header from "../../components/header/Header";
import styles from "./Styles";
import PropertyCard from "../../components/propertyCard/PropertyCard";

const SearchScreen = () => {
  let data = [
    {
      id: 1,
      image: require("../../../assets/Property1.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      liked: true,
      price: "$750.90",
    },
    {
      id: 2,
      image: require("../../../assets/Property2.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      price: "$952.90",
      liked: false,
    },
    {
      id: 3,
      image: require("../../../assets/Property1.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      liked: false,
      price: "$750.90",
    },
  ];

  return (
    <View style={[styles.container]}>
      <Header title={"Search"} />
      <View style={styles.bodyContainer}>
        {/* search view */}
        <View style={styles.searchContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.searchTextContainer}>
              <Search />
              <Text style={styles.textSearch}>Search...</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Filter />
            </TouchableOpacity>
          </View>
        </View>
        {/* search view ends */}

        <View style={styles.popularViewContainer}>
          <Text style={styles.popularText}>Most Popular</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              {data.map((item, index) => (
                <PropertyCard key={item.id} details={{ ...item, index }} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
