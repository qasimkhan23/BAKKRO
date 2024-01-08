import { Animated, View, Text } from "react-native";
import { useRef, useEffect, useState } from "react";
import Header from "../header/Header";
export const AnimtedHeader = ({ scrollYValue }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (scrollYValue > 50) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [scrollYValue]);

  return (
    <Animated.View
      style={{
        height: 95,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: "#FFF",
        zIndex: 1,
        paddingHorizontal: 25,
        opacity: fadeAnim,
      }}
    >
      <View style={{ marginTop: "15%" }}>
        <Header title={"Details"} />
      </View>
    </Animated.View>
  );
};
