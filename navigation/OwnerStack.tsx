import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";

const ExploreStack = createNativeStackNavigator();

const ExploreStackScreens: FC<{}> = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen component={LoginScreen} name="ExploreScreen" />
    </ExploreStack.Navigator>
  );
};
export default ExploreStackScreens;
