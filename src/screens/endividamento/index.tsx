import { ScrollView, Text, View } from "react-native";
import { styled } from "./styled";
import { RiscoCrlBacen } from "../../components/endividamento/riscoCrlBacen";

export function Endividamento(){
    return(
        <ScrollView style={styled.container} showsVerticalScrollIndicator={false}>
            <Text style={styled.textTitle}>Endividamento</Text>

           <RiscoCrlBacen/>
        </ScrollView>
    )
}