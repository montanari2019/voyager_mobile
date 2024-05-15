import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    // alignItems: "center",
    // justifyContent: "center",
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
    textAlign: 'center',
  
  },
  textParagraphRegularSm: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "normal",
  },

  cardTotalizer:{
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_500,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    gap: 16,
    marginVertical: 10,
    

  },

  cardDadTotalizer:{
      flexDirection: 'row',
      justifyContent:'space-between',
      width: '100%',
      alignItems: 'center',
      gap: 16,
      marginVertical: 10,
      flexWrap: 'wrap'
      
  },
  cardTotalizerAcount:{
    width: "45%",
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_700,
    borderRadius: 15,
    paddingTop: 16,
    paddingBottom: 7,
    paddingHorizontal: 5,
    gap: 16,
    marginVertical: 10,
  },

  cardTotalizerAcountActive:{
    width: "45%",
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_500,
    borderRadius: 15,
    paddingTop: 16,
    paddingBottom: 7,
    paddingHorizontal: 5,
    gap: 16,
    marginVertical: 10,
  },

  cardTotalizerAcountDisable:{
    width: "45%",
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_500,
    borderRadius: 15,
    paddingTop: 16,
    paddingBottom: 7,
    paddingHorizontal: 5,
    gap: 16,
    marginVertical: 10,
    opacity: 0.5,
  },

  cardTotalizerAcountIten:{
    backgroundColor: THEME_DARK.COLORS.GRAY_400,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 16,
    gap: 10,
   
  },

  cardTotalizerAcountItenActive:{
    backgroundColor: THEME_DARK.COLORS.PURPLE_700,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 16,
    gap: 10,
  },
  cardTotalizerAcountItenDisable:{
    backgroundColor: THEME_DARK.COLORS.GRAY_400,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 16,
    gap: 10,
  },
});
