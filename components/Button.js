import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { scale, verticalScale } from "../utils/StyleConfig";
import { Fonts } from "../constants/Fonts";
import { Ionicons } from "@expo/vector-icons";

// Reusable Button Component with Images
const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  style,
  leftImage,
  leftImageStyle,
  rightImageStyle,
  rightImage,
  disabled,
  rightIcon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? "#d3d3d3" : backgroundColor || "#007048",
        },
        style,
      ]}
      activeOpacity={0.5}
      disabled={disabled}
    >
      <View style={styles.content}>
        {/* Left Image/Icon */}
        {leftImage && <Image source={leftImage} style={leftImageStyle} />}
        <Text style={[styles.text, { color: textColor || "#FFFFFF" }]}>
          {title}
        </Text>
        {/* Right Image/Icon */}
        <View>
          {rightIcon && (
            <Ionicons name={"open-outline"} size={scale(18)} color="#FFFFFF" />
          )}
          {rightImage && <Image source={rightImage} style={rightImageStyle} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Default Styles
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: verticalScale(48),
    padding: scale(10),
    borderRadius: scale(10),
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: scale(14),
    marginHorizontal: scale(8),
    fontFamily: Fonts.Poopins_600,
  },
});

export default CustomButton;
