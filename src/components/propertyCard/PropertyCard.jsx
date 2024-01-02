import React from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import { Liked, NotLiked } from "../../../assets/svgs/svg";
import styles from "./Styles";

const PropertyCard = ({ details }) => {
  const { title, desp, image, index, price } = details;
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, { marginLeft: index == 0 ? 0 : 18 }]}>
        <ImageBackground
          style={{
            height: 109,
            width: 153,
            alignItems: "flex-end",
            padding: 4,
          }}
          source={image}
        >
          <Liked />
        </ImageBackground>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text numberOfLines={2} style={styles.cardDesp}>
            {desp}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;
