import { Text, View } from "react-native";
import { styled } from "./styled";

export function Lancamentos(){
    return(
        <View style={styled.container}>
            <Text style={styled.textTitle}>Lancamentos</Text>
        </View>
    )
}