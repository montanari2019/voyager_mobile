import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";

export const styled  = StyleSheet.create({
    container:{
       
        flex: 1,
        marginTop: 25,
        width: "100%",
        // alignItems: 'center',
        // justifyContent: 'center',
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
        fontSize: THEME_DARK.FONT_SIZE.LG,
        fontWeight: 'normal',
    },
    textParagraphRegularSm:{
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontSize: THEME_DARK.FONT_SIZE.SM,
        fontWeight: 'normal',
    },
    viewCardText:{
        gap: 5
    },

    viewCard:{
        
        marginVertical: 50,
        gap: 16,
        alignItems: 'center',


    },

    viewCardItem:{
        width: "100%",
        backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY,
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        gap: 25,
        borderWidth: 1,
        borderColor: THEME_DARK.COLORS.BASE_BORDER_700
        // alignItems: 'center',
        // justifyContent:'space-between'
    }
})