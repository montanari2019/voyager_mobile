import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { THEME_DARK } from "../themes/global.theme";
import { TabRoutes } from "./tabRoutes";
import backgroundImg from "../assets/bg_purple.png";
export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = "transparent";

  return (
    <View style={{ flex: 1 }}>
        
      <NavigationContainer theme={theme}>
        <TabRoutes/>
      </NavigationContainer>
    </View>
  );
}


