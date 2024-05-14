import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";

export const styled  = StyleSheet.create({
    header: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',

      },
      headerNameSubTitle: {
        fontSize: THEME_DARK.FONT_SIZE.SM,
        fontWeight: "normal",
        color: THEME_DARK.COLORS.BASE_TEXT,
      },
      headerNameTitle: {
        fontSize: THEME_DARK.FONT_SIZE.LG,
        fontWeight: "bold",
        color: THEME_DARK.COLORS.BASE_TEXT,
      },
})