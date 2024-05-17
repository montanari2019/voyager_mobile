import {
  Asap_400Regular,
  Asap_700Bold,
  useFonts,
} from "@expo-google-fonts/asap";
import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import backgroundImg from "./src/assets/bg_purple.png";
import { HeaderSession } from "./src/components/headerAndInput";
import { Loading } from "./src/components/loading";
import { Routes } from "./src/routes";
import { THEME_DARK } from "./src/themes/global.theme";
import { Background } from "./src/components/background";
export default function App() {
  const [fontsLoaded] = useFonts({ Asap_400Regular, Asap_700Bold });
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <Background />
      
      {fontsLoaded ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} onMomentumScrollEnd={() => console.log("novo teste 01")}  >
          <View style={styles.viewContainerPai}>
            <View style={styles.viewContainer}>
              <HeaderSession />
            </View>
            <Routes />
          </View>
        </ScrollView>
      ) : (
        <Loading textFild />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_DARK.COLORS.BASE_BG,
  },

  viewContainerPai: {
    marginTop: "10%",
    flex: 1,
    width: "100%",
  },

  viewContainer: {
    marginHorizontal: 25,
  },

  backgroundImgStyle: {
    resizeMode: "contain",
    position: "absolute",
  },
});
