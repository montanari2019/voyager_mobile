import { Text, View } from "react-native";
import { styled } from "./styled";
import { decimalFromatter } from "../../../utils/formate";
import { TableEndividamento } from "../../tables/tableEndividamento";
import { TableBacenVencer } from "../../tables/tableBacenVencer";

const data = {
  cpf_cnpj: "00887957218",
  vencer_ate_360: 19862.5,
  vencer_361_720: 10585.25,
  vencer_721_1080: 8794.93,
  vencer_1081_1440: 765.45,
  vencer_1441_1800: 0,
  vencer_1801_5400: 0,
  vencer_acima_5400: 0,
  mes_ref: "2024-03",
  data_movimento: "2024-03-01T08:00:00.000Z",
};
export function BacenVencer() {
  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <Text style={styled.textParagraphBold}>Bacen a Vencer</Text>
        <Text style={styled.textParagraphRegularSm}>2024-04</Text>
      </View>

      <TableBacenVencer
        header={["Periodo dias", "Periodo ano", "Valor"]}
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
