import React, { useRef, useState, useEffect } from "react";
import Carousel, {
  ParallaxImage,
  Pagination,
} from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import {
  Location,
  Whatsapp,
  ProfileImage,
  Stars,
  Sqft,
  Bedroom,
  Bath,
  Ac,
  Gym,
  Swim,
  Cable,
  Wifi,
  Map,
} from "../../../assets/svgs/svg";
import styles from "./Styles";

const ENTRIES1 = [
  {
    illustration: require("../../../assets/carosel1.png"),
  },
  {
    illustration: require("../../../assets/carosel1.png"),
  },
  {
    illustration: require("../../../assets/carosel1.png"),
  },
  {
    illustration: require("../../../assets/carosel1.png"),
  },
  {
    illustration: require("../../../assets/carosel1.png"),
  },
];
const { width: screenWidth } = Dimensions.get("window");

const PropertyDetailScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.illustration}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Mordern House</Text>
              <View style={styles.descContainer}>
                <Location />
                <Text style={styles.desc}> 4517 Washington Ave. </Text>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$666.90</Text>
              <Text style={styles.priceText}>Price</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.agentInfoContainer}
            onPress={() => navigation.navigate("AgentProfileScreen")}
          >
            <View style={styles.agentInfo}>
              <ProfileImage />
              <View style={styles.agentNameContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.agentName}>Louisa Wilson</Text>
                  <Text style={styles.designation}>(Agent)</Text>
                </View>
                <View style={styles.ratingsContainer}>
                  <Stars />
                  <Text style={styles.ratings}>(2450)</Text>
                </View>
              </View>
            </View>
            <Whatsapp />
          </TouchableOpacity>

          <View style={styles.aboutInfoContainer}>
            <Text style={styles.aboutTitle}>About the property</Text>
            <Text style={styles.aboutDesc}>
              Lorem ipsum dolor sit amet consectetur. Bibendum con sectetur in
              libero enim congue porta sit facilisis. Volu tpat lobortis proin
              gravida nulla dui urna duis. Dictum tincidunt viverra augue
              tortor. Pretium pellentesque bla ndit et nec vitae lacus lorem
              adipiscing etiam. Egestas massa ullamcorper{" "}
              <Text style={styles.readMore}>Read more...</Text>
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.propertyDetailsContainer}>
              <View style={styles.propertyTag}>
                <View style={styles.propertyTagInfoContaner}>
                  <Sqft />
                  <Text style={styles.sizeText}>2000sqft</Text>
                </View>
              </View>

              <View style={styles.propertyTag}>
                <View style={styles.propertyTagInfoContaner}>
                  <Bedroom />
                  <Text style={styles.sizeText}>3 Bedrooms</Text>
                </View>
              </View>

              <View style={styles.propertyTag}>
                <View style={styles.propertyTagInfoContaner}>
                  <Bath />
                  <Text style={styles.sizeText}>3 Bathrooms</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.amenitiesContainer}>
            <Text style={styles.amText}>Amenities</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.amenitiesTagContainer}>
                <View style={styles.amIconContainer}>
                  <Ac />
                  <Text style={styles.amIconText}>Air Condit</Text>
                </View>
                <View style={styles.amIconContainer}>
                  <Gym />
                  <Text style={styles.amIconText}>Gym</Text>
                </View>
                <View style={styles.amIconContainer}>
                  <Swim />
                  <Text style={styles.amIconText}>Swimming</Text>
                </View>
                <View style={styles.amIconContainer}>
                  <Cable />
                  <Text style={styles.amIconText}>Tv Cable</Text>
                </View>
                <View style={styles.amIconContainer}>
                  <Wifi />
                  <Text style={styles.amIconText}>WiFi</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Location</Text>
            <Map style={styles.mapImage} />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Text style={styles.btnText}>Virtual tour</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bookingBtnContainer}>
            <TouchableOpacity style={styles.bookingBtn} onPress={() => {}}>
              <Text style={styles.bookingBtnText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PropertyDetailScreen;
