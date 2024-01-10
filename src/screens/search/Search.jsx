import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Filter, Search, Cross } from "../../../assets/svgs/svg";
import Header from "../../components/header/Header";
import styles from "./Styles";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import Modal from "react-native-modal";
import FilterScreen from "../filter/Filter";
import SearchCard from "../../components/searchCard/SearchCard";
const SearchScreen = ({ navigation }) => {
  const [searched, setSearched] = useState(false);
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

  let searchData = [
    {
      id: 1,
      image: require("../../../assets/property5.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      liked: true,
      price: "$750.90",
    },
    {
      id: 2,
      image: require("../../../assets/property6.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      price: "$952.90",
      liked: false,
    },
    {
      id: 3,
      image: require("../../../assets/property5.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
      liked: false,
      price: "$750.90",
    },
  ];
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <View style={[styles.container]}>
        <Header title={"Search"} />
        <ScrollView
          style={styles.bodyContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* search view */}
          <View style={styles.searchContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={styles.searchTextContainer}
                onPress={() => setSearched(false)}
              >
                <Search />
                <Text style={styles.textSearch}>Search...</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Filter />
              </TouchableOpacity>
            </View>
          </View>
          {/* search view ends */}

          {searched && (
            <View style={{ marginTop: 20 }}>
              {searchData.map((item, index) => (
                <SearchCard
                  key={item.id}
                  details={{ ...item, index }}
                  customStyles={{ marginBottom: 20 }}
                />
              ))}
            </View>
          )}
          {/* most popular view */}
          {!searched && (
            <>
              <View style={styles.popularViewContainer}>
                <Text style={styles.popularText}>Most Popular</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ flexDirection: "row" }}>
                    {data.map((item, index) => (
                      <PropertyCard
                        key={item.id}
                        details={{ ...item, index }}
                        type="mostPopular"
                        handleClickCallback={() =>
                          navigation.navigate("PropertyDetailScreen")
                        }
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={styles.mostViewedContainer}>
                <Text style={styles.mostViewsText}>Most View</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {data.map((item, index) => (
                      <PropertyCard
                        key={item.id}
                        details={{ ...item, index }}
                        customStyles={{ marginBottom: 20 }}
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>
            </>
          )}
        </ScrollView>
      </View>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
      >
        <View style={styles.modalMainView}>
          <View style={styles.modalContainer}>
            <View style={styles.filterTextView}>
              <TouchableOpacity onPress={toggleModal}>
                <Cross />
              </TouchableOpacity>
            </View>
            <FilterScreen
              searchCallback={setSearched}
              toggleModal={toggleModal}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SearchScreen;
