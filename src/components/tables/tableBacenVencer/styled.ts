import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({
  table: {

    marginVertical: 10,
  },
  rowColor: {
    flexDirection: "row",
    color: THEME_DARK.COLORS.BASE_TEXT,
    backgroundColor: THEME_DARK.COLORS.GRAY_CARD_OPACITY,
    borderRadius: 10,
    // borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    color: THEME_DARK.COLORS.BASE_TEXT,
  },
  cellHeader: {
    flex: 1,
    textTransform: 'capitalize',
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
    padding: 10,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
