import { Colors } from "../constants/Colors";
import { StatusBar, useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useEffect } from "react";
import { Stack } from "expo-router";
SplashScreen.preventAutoHideAsync();

const customDarkTheme = { ...Colors.light };
const customLightTheme = { ...Colors.light };

const _layout = () => {
  const [loaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark" ? customDarkTheme : customLightTheme;
  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Login" />
        <Stack.Screen name="Register" />
        <Stack.Screen name="EmailVerification" />
        <Stack.Screen name="tabs" />
      </Stack>
    </PaperProvider>
  );
};

export default _layout;
