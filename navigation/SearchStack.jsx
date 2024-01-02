import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../src/screens/search/Search";

const SearchStack = createNativeStackNavigator();

const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen component={SearchScreen} name="SearchScreen" />
    </SearchStack.Navigator>
  );
};
export default SearchStackScreens;
