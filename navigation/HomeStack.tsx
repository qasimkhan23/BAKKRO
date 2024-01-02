import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/home/Home";
import BookingScreen from "../src/screens/booking/Booking";
const HomeStack = createNativeStackNavigator();

const HomeStackScreens: FC<{}> = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={HomeScreen} name="HomeScreen" />
      <HomeStack.Screen component={BookingScreen} name="BookingScreen" />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreens;
