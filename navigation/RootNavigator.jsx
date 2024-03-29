import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashStackScreens from "./SplashStack";
import AuthStackScreens from "./AuthStack";
import BottomStackScreens from "./BottomStack";
import OtpSenderStackScreens from "./OtpSenderStack";
import OtpConfirmStackScreens from "./OtpConfirmStack";
import { NavigationContainer } from "@react-navigation/native";

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={"SplashScreen"}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen component={SplashStackScreens} name="SplashStack" />
        <RootStack.Screen
          component={OtpSenderStackScreens}
          name="OtpSenderStack"
        />
        <RootStack.Screen
          component={OtpConfirmStackScreens}
          name="OtpConfirmStack"
        />
        <RootStack.Screen component={AuthStackScreens} name="AuthStack" />
        <RootStack.Screen component={BottomStackScreens} name="BottomStack" />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
