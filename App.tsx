import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import backgroundImg from "./src/assets/bg_purple.png";
import backgroundImg02 from "./src/assets/bg_green.png";
import { HomeVisaoAssociado } from "./src/screens/home";
import { THEME_DARK } from "./src/themes/global.theme";
import { HeaderComponent } from "./src/components/header";
import { Asap_400Regular, Asap_700Bold, useFonts } from "@expo-google-fonts/asap";
import { Loading } from "./src/components/loading";
import { InputComponent } from "./src/components/input";
export default function App() {
  const [fontsLoaded] = useFonts({ Asap_400Regular, Asap_700Bold });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={backgroundImg}
        defaultSource={backgroundImg}
        style={styles.backgroundImgStyle}
      />

      {
        fontsLoaded? (
          <View style={styles.viewContainer}>
          <HeaderComponent/>
          
          <HomeVisaoAssociado />
        </View>
        ) : (
         <Loading textFild/>
        )
      }
     
    </SafeAreaView>
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
