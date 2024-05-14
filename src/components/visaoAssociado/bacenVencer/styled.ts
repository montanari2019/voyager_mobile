import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../../themes/global.theme";

export const styled = StyleSheet.create({
    container:{
        width: "100%",
        backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        gap: 25,
        borderWidth: 1,
        borderColor: THEME_DARK.COLORS.BASE_BORDER_700
    },

    header:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle:{
        
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontSize: THEME_DARK.FONT_SIZE.XL,
        fontWeight: "bold",
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    textParagraphBold:{
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontSize: THEME_DARK.FONT_SIZE.MD,
        fontWeight: 'bold',
    },
    textParagraphRegular:{
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontSize: THEME_DARK.FONT_SIZE.SM,
        fontWeight: 'normal',
    },


    textParagraphRegularSm:{
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontSize: THEME_DARK.FONT_SIZE.SM,
        fontWeight: 'normal',
    },

    viewCardText:{
        gap: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        
    },

    viewCard:{
        
        marginVertical: 50,
        gap: 16,
        alignItems: 'center',


    },

    headerTable:{
        // flexDirection: 'row',
        justifyContent:'space-between',
        // alignItems: 'center',
        gap: 10,
        marginBottom: 10
    },
    bodyTable:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
    },


    table: {
        // borderWidth: 1,
        // borderColor: 'black',
        marginVertical: 10,
      },
      rowColor: {
        flexDirection: 'row',
        color: THEME_DARK.COLORS.BASE_TEXT,
        backgroundColor: THEME_DARK.COLORS.GRAY_CARD_OPACITY,
        borderRadius: 10,
        borderWidth: 1,
      },
      row: {
        flexDirection: 'row',
        color: THEME_DARK.COLORS.BASE_TEXT,
      },
      cellHeader: {
        flex: 1,
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
      },
      cell: {
        flex: 1,
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontSize: THEME_DARK.FONT_SIZE.XSM,
        // borderWidth: 1,
        padding: 10,
        textAlign: 'center',
      },
})