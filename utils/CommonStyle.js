import { StyleSheet } from "react-native";
import { moderateScale, scale } from "./StyleConfig";
import { Fonts } from "../constants/Fonts";
import { Colors } from "../constants/Colors";

export const Commonstyle = {
  policyText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.Poopins_900,
    color: Colors.light.textSecondary,
  },
};
