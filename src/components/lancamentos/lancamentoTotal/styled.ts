import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
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

  textParagraphRegularSm: {
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.SM,
    fontWeight: "normal",
    // width: 60,
  },

  cardGraphic: {
    flex: 1,
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_500,
    borderRadius: 10,
    padding: 16,
    // alignItems: "center",
    gap: 16,
    marginVertical: 10,
  },

  graphicItemDad: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    // justifyContent: "flex-start",
    // width: "100%",
  },

  displayIten: {
    flexDirection: "row",
  },

  graphicItemChildren: {
    height: 25,
    justifyContent: "center",
    // alignItems: "",
    backgroundColor: THEME_DARK.COLORS.BASE_BORDER_500,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  buttonFilters: {
    gap: 10,
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    marginVertical: 25,
  },
  resumoMovimentacao: {
    gap: 25,
    marginVertical: 20,
    alignItems: "center",
  },

  itemMovimentacao: {
    gap: 5,
    alignItems: "center",
  },
});
