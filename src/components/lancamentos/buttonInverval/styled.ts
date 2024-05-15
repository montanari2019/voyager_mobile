import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  buttonDad:{
    backgroundColor: THEME_DARK.COLORS.BASE_TEXT,
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonChildren:{

    height: 10,
    width: 10,
    borderRadius: 25,
  },

  textTitle: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.XL,
    fontWeight: "bold",
  },

  textParagraphBold: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "bold",
  },
  textParagraphRegular: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    fontWeight: "normal",
  },

  textParagraphRegularCenter: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    fontWeight: "normal",
    textAlign: "center",
  },
  textParagraphRegularSm: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "normal",
  },
});
