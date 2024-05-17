import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({



  textParagraphBold: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "bold",
  },
  textParagraphRegular: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "normal",
  
  },


  cardAnaliticoItem:{
    backgroundColor: THEME_DARK.COLORS.GRAY_CARD_OPACITY_02,
    padding: 15,
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_700,
    marginVertical: 10,
    width: "100%",

  },

  cardDataItem:{
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    width: "100%",
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardDataItemChildren:{
    backgroundColor: THEME_DARK.COLORS.GRAY_CARD_OPACITY,
    width: "100%",
    alignItems: "center",
    // height: ,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
  
    padding: 12

  },
});
