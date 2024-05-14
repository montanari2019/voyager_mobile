import { Text, View } from "react-native";
import { styled } from "./styled";
import { decimalFromatter } from "../../../utils/formate";
import { TableEndividamento } from "../../tables/tableEndividamento";


const data = {
  cpf_cnpj: "00887957218",
  mes_ref: "2024-03",
  devedor_bacen: 40509.21,
  prejuizo_bacen: 0,
  vencido_bacen: 501.08,
  devedor_sicoob: 0,
  prejuizo_sicoob: 0,
  vencido_sicoob: 0,
  credito_liberar: 7512.49,
};
export function Endividamento() {
  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <Text style={styled.textParagraphBold}>Endividamento</Text>
        <Text style={styled.textParagraphRegularSm}>2024-04</Text>
      </View>

      <TableEndividamento
        header={["modalidade", "bacen", "sicoob"]}
        data={data}
      />

      {/* <View style={styled.viewCardText}>
        <View style={styled.headerTable}>
            <Text  style={styled.textParagraphBold}>Modalidade</Text>
            <Text  style={styled.textParagraphRegular}>Saldo devedor</Text>
            <Text  style={styled.textParagraphRegular}>Saldo Vencido</Text>
            <Text  style={styled.textParagraphRegular}>Saldo Prejuízo</Text>
            <Text  style={styled.textParagraphRegular}>Saldo a liberar</Text>
        </View>

        <View style={styled.headerTable}>
            <Text  style={styled.textParagraphBold}>Bacen</Text>
            <Text  style={styled.textParagraphRegular}>24.171.848,30</Text>
            <Text  style={styled.textParagraphRegular}>24.171.848,30</Text>
            <Text  style={styled.textParagraphRegular}>24.171.848,30</Text>
            <Text  style={styled.textParagraphRegular}>24.171.848,30</Text>
        </View>

        <View style={styled.headerTable}>
            <Text  style={styled.textParagraphBold}>Sicoob</Text>
            <Text  style={styled.textParagraphRegular}>24.171.848,30</Text>
            <Text  style={styled.textParagraphRegular}>24.171.848,30</Text>
            <Text  style={styled.textParagraphRegular}>24.171.848,30</Text>
            <Text  style={styled.textParagraphRegular}>0</Text>
        </View>

      
        
      </View> */}
    </View>
  );
}
