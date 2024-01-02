import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen component={LoginScreen} name="LoginScreen" />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreens;
