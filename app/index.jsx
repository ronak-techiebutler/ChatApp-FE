import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "../utils/StyleConfig";
import { Feather } from "@expo/vector-icons";
import { TextInput, useTheme } from "react-native-paper";
import { Fonts } from "../constants/Fonts";
import CustomButton from "../components/Button";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securityTxt, setSecurityTxt] = useState(true);
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Image
        source={require("../assets/images/Illustration.png")}
        style={styles.tittleImg}
      />
      <Text style={[styles.headerTxt, { color: theme.textPrimary }]}>
        {"Connect easily with your family and friends."}
      </Text>

      <CustomButton title="Login" onPress={() => router.push("/Login")} />

      <CustomButton
        title="Register"
        style={styles.continueBtn}
        onPress={() => router.push("/Register")}
      />

      <Text style={[styles.policyText, { color: theme.textSecondary }]}>
        {"Terms Of Use & Privacy Policy"}
      </Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(24),
  },
  tittleImg: {
    resizeMode: "cover",
    width: scale(262),
    height: verticalScale(271),
    resizeMode: "contain",
  },
  headerTxt: {
    fontFamily: Fonts.Poopins_500,
    fontSize: moderateScale(22),
    marginTop: verticalScale(50),
    textAlign: "center",
    marginBottom: verticalScale(30),
  },

  continueBtn: {
    marginTop: verticalScale(10),
  },

  policyText: {
    marginTop: verticalScale(50),
    fontSize: moderateScale(14),
    fontFamily: Fonts.Poopins_400,
  },
});
