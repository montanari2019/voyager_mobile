import { Text, View } from "react-native";
import { styled } from "./styled";
import { decimalFromatter } from "../../../utils/formate";
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
type dataType = typeof data;

interface TableBacenVencerProps {
  header: string[];
  data: dataType;
}

export function TableBacenVencer({ data, header }: TableBacenVencerProps) {
  return (
    <View style={styled.table}>
      <View style={styled.row}>
        {header.map((item) => {
          return <Text style={styled.cellHeader}>{item}</Text>;
        })}
      </View>

      <View style={styled.rowColor}>
        <Text style={styled.cell}>Vencer até 360</Text>
        <Text style={styled.cell}>1º ano</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencer_ate_360))}
        </Text>
      </View>

      <View style={styled.row}>
        <Text style={styled.cell}>Vencer de 361 a 720</Text>
        <Text style={styled.cell}>2º ano</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencer_361_720))}
        </Text>
      </View>
    
      <View style={styled.rowColor}>
        <Text style={styled.cell}>vencer de 721 a 1080</Text>
        <Text style={styled.cell}>3º ano</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencer_721_1080))}
        </Text>
      </View>


      <View style={styled.row}>
        <Text style={styled.cell}>vencer de 1081 a 1440</Text>
        <Text style={styled.cell}>4º ano</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencer_1081_1440))}
        </Text>
      </View>

      <View style={styled.rowColor}>
        <Text style={styled.cell}>vencer de 1441 a 1800</Text>
        <Text style={styled.cell}>5º ano</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencer_1441_1800))}
        </Text>
      </View>

      <View style={styled.row}>
        <Text style={styled.cell}>vencer de 1801 a 5400</Text>
        <Text style={styled.cell}>6º até 15º ano</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencer_1801_5400))}
        </Text>
      </View>

      <View style={styled.rowColor}>
        <Text style={styled.cell}>Vencer Acima 5400</Text>
        <Text style={styled.cell}>Acima 15º ano</Text>
        <Text style={styled.cell}>
          {decimalFromatter.format(Number(data.vencer_acima_5400))}
        </Text>
      </View>
    </View>
  );
}
