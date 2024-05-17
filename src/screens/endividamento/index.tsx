import { ScrollView, Text, View } from "react-native";
import { styled } from "./styled";
import { RiscoCrlBacen } from "../../components/endividamento/riscoCrlBacen";
import { EndividamentoPeríodo } from "../../components/endividamento/endividamentoPeriodo";
import { EndividamentoUmAno } from "../../components/endividamento/endividamentoUmAno";

export function Endividamento(){
    return(
        <ScrollView style={styled.container} showsVerticalScrollIndicator={false}>
            <Text style={styled.textTitle}>Endividamento</Text>

           <RiscoCrlBacen/>

           <EndividamentoPeríodo/>


           <EndividamentoUmAno/>
        </ScrollView>
    )
}