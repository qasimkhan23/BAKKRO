import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
const SearchStack = createNativeStackNavigator();

const SearchStackScreens: FC<{}> = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen component={LoginScreen} name="LoginScreen" />
    </SearchStack.Navigator>
  );
};
export default SearchStackScreens;
