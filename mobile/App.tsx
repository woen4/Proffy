import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import StackRoutes from "./src/routes/stackRoutes";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { Archivo_600SemiBold } from "@expo-google-fonts/archivo";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      <StackRoutes />
    </>
  );
}
