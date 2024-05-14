import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";

export const styled = StyleSheet.create({
  inputDefault: {
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    color: THEME_DARK.COLORS.BASE_TEXT,
    paddingLeft: 10,
    fontSize: THEME_DARK.FONT_SIZE.LG,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_700,
  },
  inputActive: {
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    color: THEME_DARK.COLORS.BASE_TEXT,
    paddingLeft: 10,
    fontSize: THEME_DARK.FONT_SIZE.LG,
    borderWidth: 1.3 ,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_500,
  },
  inputError: {
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    color: THEME_DARK.COLORS.BASE_TEXT,
    paddingLeft: 10,
    fontSize: THEME_DARK.FONT_SIZE.LG,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.DANGER_500,
  },



  

  label: {
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "normal",
    color: THEME_DARK.COLORS.GRAY_200,
  },
});
