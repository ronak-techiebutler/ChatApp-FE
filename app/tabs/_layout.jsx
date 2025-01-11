import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { moderateScale, scale, verticalScale } from "../../utils/StyleConfig";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? "chatbox-ellipses" : "chatbox"}
                size={scale(30)}
                color={color}
              />
              <Text style={styles.iconText}>{"Chat"}</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconContainer}>
              <FontAwesome
                name={focused ? "user-circle-o" : "user-circle"}
                size={scale(30)}
                color={color}
              />
              <Text style={styles.iconText}>{"Profile"}</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: verticalScale(75), // Custom container height
    backgroundColor: "#f8f9fa", // Optional background color
    borderTopWidth: 0, // Remove border if needed
    alignItems: "center",
    paddingTop: verticalScale(25),
  },
  iconContainer: {
    width: scale(117),
    height: verticalScale(65),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: moderateScale(8),
  },
  iconText: {
    fontFamily: Fonts.Poopins_500,
    fontSize: moderateScale(15),
    color: Colors.light.textPrimary,
    marginTop: verticalScale(2),
  },
});

export default _layout;
