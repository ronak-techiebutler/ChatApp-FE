import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const ScreenWrapper = ({ children, bg }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>{children}</View>
  );
};

export { ScreenWrapper };
