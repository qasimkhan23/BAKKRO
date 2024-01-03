import React from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import { Liked, NotLiked } from "../../../assets/svgs/svg";
import styles from "./Styles";

const SearchCard = ({ details, type, customStyles }) => {
  const { title, desp, image, index, price, liked } = details;
  return (
    <View style={[styles.cardContainer]}>
      <View
        style={[
          styles.card,
          customStyles,
          { marginRight: type == "mostPopular" ? 12 : 12 },
        ]}
      >
        <ImageBackground style={styles.image} source={image}>
          {liked == true ? (
            <Liked style={{ marginBottom: -14, marginRight: 15 }} />
          ) : (
            <NotLiked style={{ marginBottom: -14, marginRight: 15 }} />
          )}
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

export default SearchCard;
