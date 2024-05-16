import { View } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";
import { BlurView } from "expo-blur";
import { BackdropFilter } from "@shopify/react-native-skia";
import { LinearGradient } from "expo-linear-gradient";
export function Background() {
  return (
    <View>
      <LinearGradient
        colors={[
          THEME_DARK.COLORS.BASE_BORDER_700,
          THEME_DARK.COLORS.BASE_BG,
          "transparent",
          THEME_DARK.COLORS.BASE_BORDER_700,
        ]}
        start={{ x: 1.2, y: 0 }}
        style={{
          // flex: 1,

          height: 900,
          width: "100%",

          position: "absolute",
        }}
      />
    </View>
  );
}
