import { View } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";


interface SeparatorProps {
    color?:string
}
export function Separator({ color = THEME_DARK.COLORS.GRAY_400 }:SeparatorProps){
    return (
        <View style={{borderBottomWidth: 1, borderBottomColor: color, marginVertical: 10}}></View>
    )
}