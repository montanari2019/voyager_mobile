import { Text, View } from "react-native";
import { styled } from "./styled";
import { decimalFromatter } from "../../../utils/formate";
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
type dataType = typeof data;

interface TableEndividamentoProps {
  header: string[];
  data: dataType;
}

export function TableEndividamento({ data, header, }: TableEndividamentoProps) {
  const getRowStyle = (index: any) => {
    return index % 2 === 0 ? styled.rowColor : styled.row;
  };
  return (
    <View style={styled.table}>
      <View style={styled.row}>
        {header.map((item) => {
          return <Text style={styled.cellHeader}>{item}</Text>;
        })}
      </View>

      <View style={styled.rowColor}>
        <Text style={styled.cell}>Saldo Devedor</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.devedor_bacen))}
        </Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.devedor_sicoob))}
        </Text>
      </View>
      <View style={styled.row}>
        <Text style={styled.cell}>Saldo Vencido</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencido_bacen))}
        </Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencido_sicoob))}
        </Text>
      </View>

      <View style={styled.rowColor}>
        <Text style={styled.cell}>Saldo Prejuízo</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(data.prejuizo_bacen)}
        </Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(data.prejuizo_sicoob)}
        </Text>
      </View>
      <View style={styled.row}>
        <Text style={styled.cell}>Saldo a liberar</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(data.credito_liberar)}
        </Text>
        <Text style={styled.cell}>{decimalFromatter.format(0)}</Text>
      </View>
    </View>
  );
}
