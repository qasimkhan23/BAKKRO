import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Liked, NotLiked } from "../../../assets/svgs/svg";
import styles from "./Styles";

const PropertyCard = ({ details, type, customStyles, handleClickCallback }) => {
  const { title, desp, image, index, price, liked } = details;
  return (
    <View style={[styles.cardContainer]}>
      <TouchableOpacity
        style={[
          styles.card,
          customStyles,
          { marginRight: type == "mostPopular" ? 12 : 12 },
        ]}
        onPress={() => handleClickCallback()}
      >
        <ImageBackground style={styles.image} source={image}>
          {liked == true ? <Liked /> : <NotLiked />}
        </ImageBackground>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text numberOfLines={2} style={styles.cardDesp}>
            {desp}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PropertyCard;
