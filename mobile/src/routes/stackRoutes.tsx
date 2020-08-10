import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import Teacher from "../pages/Teacher";
import BottomTabsRoutes from "./bottomTabsRoutes";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <Stack.Screen name="Landing" component={Landing}></Stack.Screen>
        <Stack.Screen name="Teacher" component={Teacher}></Stack.Screen>
        <Stack.Screen name="BottomTabs" component={BottomTabsRoutes}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
