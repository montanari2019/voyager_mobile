import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_500,
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    borderRadius: 10,
    marginVertical: 25,
    padding: 25,
    gap: 20,
    // alignItems: "center",
    // justifyContent: "space-between",

  },

  textTitle: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    fontWeight: "bold",
    textAlign: "center"
  },

  textParagraphBold: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    fontWeight: "bold",
  },
  textParagraphRegular: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.LG,
    fontWeight: "normal",
  },
  textParagraphRegularSm: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "normal",
  },
});
