import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";

export const styled  = StyleSheet.create({
    container: {
        
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // height: 33,
        width: 130,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: THEME_DARK.COLORS.PURPLE_500,
        backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY
     
      },
      subTitle: {
        fontSize: THEME_DARK.FONT_SIZE.LG,
        fontWeight: "normal",
        color: THEME_DARK.COLORS.GRAY_100,
      },
      headerNameTitle: {
        fontSize: THEME_DARK.FONT_SIZE.LG,
        fontWeight: "bold",
        color: THEME_DARK.COLORS.GRAY_100,
      },
})