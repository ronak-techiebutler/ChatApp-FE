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

const Login = () => {
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
        source={require("../assets/images/tittle.png")}
        style={styles.tittleImg}
      />
      <Text style={[styles.headerTxt, { color: theme.textPrimary }]}>
        {"Let’s Get Login"}
      </Text>
      <Text style={[styles.subHeader, { color: theme.textSecondary }]}>
        {"Begin your journey with just your email."}
      </Text>

      <TextInput
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        underlineColor="transparent"
        activeUnderlineColor={theme.primary}
        outlineStyle={{ borderRadius: scale(10) }}
        placeholderTextColor={"rgba(93, 109, 126, 0.2)"}
        onChangeText={(text) => setEmail(text)}
        theme={{
          roundness: scale(10),
        }}
        style={[
          styles.textInputBox,
          { borderColor: theme.border, color: theme.textPrimary },
        ]}
        mode="flat"
        left={
          <TextInput.Icon
            icon={() => (
              <Feather name="mail" size={scale(24)} color="#5D6D7E" />
            )}
          />
        }
      />

      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        underlineColor="transparent"
        activeUnderlineColor={theme.primary}
        placeholderTextColor={"rgba(93, 109, 126, 0.2)"}
        theme={{
          roundness: scale(10),
        }}
        style={[
          styles.textInputBox,
          { borderColor: theme.border, color: theme.textPrimary },
        ]}
        secureTextEntry={securityTxt}
        mode="flat"
        left={
          <TextInput.Icon
            icon={() => (
              <Feather name="unlock" size={scale(24)} color="#5D6D7E" />
            )}
          />
        }
        right={
          <TextInput.Icon
            icon={() => (
              <Pressable onPress={() => setSecurityTxt(!securityTxt)}>
                <Feather
                  name={securityTxt ? "eye" : "eye-off"}
                  size={scale(24)}
                  color="#5D6D7E"
                />
              </Pressable>
            )}
          />
        }
      />

      <CustomButton
        title="Continue"
        style={styles.continueBtn}
        onPress={() => router.push("/tabs")}
      />

      <Text style={[styles.policyText, { color: theme.textSecondary }]}>
        {"Terms Of Use & Privacy Policy"}
      </Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(24),
  },
  tittleImg: {
    resizeMode: "cover",
    width: scale(200),
    height: verticalScale(50),
  },
  headerTxt: {
    fontFamily: Fonts.Poopins_500,
    fontSize: moderateScale(22),
    marginTop: verticalScale(100),
  },
  subHeader: {
    fontFamily: Fonts.Poopins_300,
    fontSize: moderateScale(14),
    marginBottom: scale(42),
  },
  textInputBox: {
    width: "100%",
    height: verticalScale(48),
    borderRadius: scale(10),
    borderWidth: moderateScale(1),
    backgroundColor: "#FFF",
    marginBottom: verticalScale(17),
    fontFamily: Fonts.Poopins_400,
    fontSize: scale(13),
  },

  continueBtn: {
    marginTop: verticalScale(40),
  },

  orTxt: {
    fontFamily: Fonts.Poopins_300,
    lineHeight: scale(22),
    fontSize: moderateScale(14),
    marginHorizontal: scale(6),
  },
  lineSection: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(32),
    marginBottom: scale(22),
  },
  line: {
    width: scale(150),
    height: verticalScale(1),
    backgroundColor: "rgba(93, 109, 126, 0.2)",
  },
  leftImageStyle: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(8),
  },
  policyText: {
    marginTop: verticalScale(44),
    fontSize: moderateScale(14),
    fontFamily: Fonts.Poopins_400,
  },
});
