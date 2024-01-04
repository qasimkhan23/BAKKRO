import React from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import { Liked, NotLiked } from "../../../assets/svgs/svg";
import styles from "./Styles";

const ListingCard = ({ details, type, customStyles }) => {
  const { title, desp, image, index, price, liked, Icon } = details;
  return (
    <View style={[styles.cardContainer]}>
      <View
        style={[styles.card, customStyles, { marginTop: index == 0 ? 28 : 0 }]}
      >
        <Image style={styles.image} source={image} />

        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={{ flexDirection: "row", marginTop: 6 }}>
            {Icon}
            <Text numberOfLines={2} style={styles.cardDesp}>
              {desp}
            </Text>
          </View>
          <Text style={styles.viewDetails}>View details</Text>
        </View>
      </View>
    </View>
  );
};

export default ListingCard;
