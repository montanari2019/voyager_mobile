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


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME_DARK.COLORS.BASE_BG,
    },
  
    viewContainer:{
      paddingHorizontal: 25,
      flex: 1,
      // gap: 15,
      width: "100%",
    },
  
  
    backgroundImgStyle: {
      resizeMode: "contain",
      position: "absolute",
    },
  });