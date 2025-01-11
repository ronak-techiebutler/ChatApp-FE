import { Dimensions } from "react-native";
const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get("window");
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const WINDOW_WIDTH = Dimensions.get("window").width;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
export const [shortDimension, longDimension] =
  W_WIDTH < W_HEIGHT ? [W_WIDTH, W_HEIGHT] : [W_HEIGHT, W_WIDTH];
export const scale = (size) => {
  return (shortDimension / guidelineBaseWidth) * size;
};
export const verticalScale = (size) => {
  return (longDimension / guidelineBaseHeight) * size;
};
export const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};
