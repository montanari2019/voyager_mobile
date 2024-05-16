import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({
  table: {

    marginVertical: 10,
  },
  rowColor: {
    flexDirection: "row",
    alignItems: "center",
    color: THEME_DARK.COLORS.BASE_TEXT,
    backgroundColor: THEME_DARK.COLORS.GRAY_CARD_OPACITY_02,
    borderRadius: 10,

    // borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    color: THEME_DARK.COLORS.BASE_TEXT,
  },
  cellHeader: {
    textTransform: 'capitalize',
    flex: 1,
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  cell: {
    flex: 1,
    color: THEME_DARK.COLORS.BASE_TEXT,
    fontSize: THEME_DARK.FONT_SIZE.XSM,
    // borderWidth: 1,
    textTransform: "capitalize",
    padding: 10,
    textAlign: "center",
  },
});
