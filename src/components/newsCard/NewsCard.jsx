import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./Styles";

const NewsCard = () => {
  let data = [
    {
      id: 1,
      image: require("../../../assets/Image1.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
    },
    {
      id: 2,
      image: require("../../../assets/Image2.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
    },
    {
      id: 3,
      image: require("../../../assets/Image2.png"),
      title: "Kpsum dolor",
      desp: "Lorem ipsum dolor sit amet cons ectetur....",
    },
  ];

  return (
    <View style={styles.cardContainer}>
      {data.map((item, index) => (
        <View
          key={item.id}
          style={[styles.card, { marginLeft: index == 0 ? 0 : 18 }]}
        >
          <Image source={item.image} />

          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.cardDesp}>
              {item.desp}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default NewsCard;
