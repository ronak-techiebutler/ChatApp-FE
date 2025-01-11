import {
  Alert,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale, scale, verticalScale } from "../utils/StyleConfig";
import { Feather } from "@expo/vector-icons";
import { TextInput, useTheme } from "react-native-paper";
import { Fonts } from "../constants/Fonts";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomButton from "../components/Button";
import { useRouter } from "expo-router";
import * as Linking from "expo-linking";

const EmailVerification = () => {
  const [screen, setScreen] = useState("verified");
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {}, [screen]);

  const openGmail = async () => {
    try {
      if (Platform.OS === "android") {
        // Try to open the Gmail app directly
        const intentUrl = "intent://#Intent;package=com.google.android.gm;end";
        const supported = await Linking.canOpenURL(intentUrl);

        if (supported) {
          await Linking.openURL(intentUrl);
        } else {
          // Fallback: Open Google Play page for Gmail
          const playStoreUrl =
            "https://play.google.com/store/apps/details?id=com.google.android.gm";
          await Linking.openURL(playStoreUrl);
        }
      } else if (Platform.OS === "ios") {
        // iOS Gmail app URL scheme
        const gmailUrl = "googlegmail://";
        const supported = await Linking.canOpenURL(gmailUrl);

        if (supported) {
          await Linking.openURL(gmailUrl);
        } else {
          // Fallback: Open mail.google.com in browser
          const browserUrl = "https://mail.google.com";
          await Linking.openURL(browserUrl);
        }
      }
    } catch (error) {
      console.error("Error opening Gmail:", error);
      Alert.alert("Error", "Failed to open Gmail app.");
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Image
        source={require("../assets/images/tittle.png")}
        style={styles.tittleImg}
      />

      <Image
        source={
          (screen === "expired" &&
            require("../assets/images/linkExpired.png")) ||
          (screen === "verified" &&
            require("../assets/images/verifedEmail.png")) ||
          require("../assets/images/sentEmail.png")
        }
        style={styles.emailLogo}
      />

      <Text style={styles.headerTxt}>
        {(screen === "expired" && "Email verification link expired") ||
          (screen === "verified" && "Account verified") ||
          "Almost there!"}
      </Text>

      <Text style={styles.subHeader}>
        {(screen == "expired" &&
          "Looks like the email verification link has expired. No worries we can send the link again.") ||
          (screen == "verified" &&
            "Congratulations! your email account mainuser@gmail.com has been verified.") ||
          "Confirm your identity by clicking the link sent to useremail@gmail.com"}
      </Text>

      {screen === "sent" && (
        <CustomButton
          title="Continue"
          leftImage={require("../assets/images/mail.png")}
          leftImageStyle={styles.leftImageStyle}
          rightIcon
          onPress={openGmail}
        />
      )}
      {screen === "expired" && (
        <CustomButton title="Resend verification link" />
      )}
      {screen === "verified" && (
        <CustomButton title="Continue to your account" />
      )}

      {screen === "sent" && (
        <CustomButton
          title="Change email"
          onPress={() => router.back()}
          textColor={theme.textSecondary}
          backgroundColor={theme.primaryStroke}
          style={styles.changeEmail}
        />
      )}

      <Text style={[styles.policyText, { color: theme.textSecondary }]}>
        {"Terms Of Use & Privacy Policy"}
      </Text>
    </SafeAreaView>
  );
};

export default EmailVerification;

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
  emailLogo: {
    width: scale(96),
    height: scale(96),
    resizeMode: "cover",
    marginTop: verticalScale(116),
  },
  headerTxt: {
    fontFamily: Fonts.Poopins_500,
    fontSize: moderateScale(22),
    color: Colors.dark.textPrimary,
    marginTop: verticalScale(27),
  },
  subHeader: {
    fontFamily: Fonts.Poopins_300,
    fontSize: moderateScale(14),
    color: Colors.dark.textSecondary,
    marginTop: scale(21),
    marginBottom: scale(79),
    textAlign: "center",
  },

  leftImageStyle: {
    width: scale(24),
    height: scale(18),
  },
  policyText: {
    marginTop: verticalScale(98),
    fontSize: moderateScale(14),
    fontFamily: Fonts.Poopins_400,
  },
  changeEmail: {
    marginTop: verticalScale(22),
  },
});
