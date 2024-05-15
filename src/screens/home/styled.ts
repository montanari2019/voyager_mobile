import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";

export const styled  = StyleSheet.create({
    container:{
       
        flex: 1,
        paddingHorizontal: 25,
        width: "100%",
        // backgroundColor: "transparent",
        // alignItems: 'center',
        // justifyContent: 'center',
    },
  
    backgroundImgStyle: {
        resizeMode: "contain",
        position: "absolute",
      },

    textTitle:{
        
        color: THEME_DARK.COLORS.BASE_TEXT,
        fontSize: THEME_DARK.FONT_SIZE.XL,
        fontWeight: "bold",
       
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
        
        marginBottom: 50,
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
     
    }
})