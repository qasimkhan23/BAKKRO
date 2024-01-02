import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";

const EventsStack = createNativeStackNavigator();

const EventsStackScreens = () => {
  return (
    <EventsStack.Navigator screenOptions={{ headerShown: false }}>
      <EventsStack.Screen component={LoginScreen} name="LoginScreen" />
    </EventsStack.Navigator>
  );
};
export default EventsStackScreens;
