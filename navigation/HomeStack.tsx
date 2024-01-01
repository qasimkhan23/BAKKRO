import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/home/Home";
const ChatStack = createNativeStackNavigator();

const ChatStackScreens: FC<{}> = () => {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen component={HomeScreen} name="HomeScreen" />
    </ChatStack.Navigator>
  );
};
export default ChatStackScreens;
