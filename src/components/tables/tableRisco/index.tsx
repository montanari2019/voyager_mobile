import { Text, View } from "react-native";
import { NoteItemRender } from "../../notItem";
import { styled } from "./styled";
const data = {
  cpf_cnpj: "string",
  mes_ref: "string",
  data_movimento: "string",
  nivel_risco_bacen: "string",
  nivel_risco_crl: "string",
};
type dataType = typeof data;

interface TableRiscoProps {
  header: string[];
  data: dataType[];
}

export function TableRisco({ data, header }: TableRiscoProps) {
  const getRowStyle = (index: any) => {
    return index % 2 === 0 ? styled.rowColor : styled.row;
  };

  return (
    <View style={styled.table}>
      <View style={styled.row}>
        {header.map((item) => {
          return (
            <Text key={item} style={styled.cellHeader}>
              {item}
            </Text>
          );
        })}
      </View>

      {data.length !== 0 ? (
        data.map((item, index) => {
          return (
            <View key={item.data_movimento} style={getRowStyle(index)}>
              <Text style={styled.cell}>{item.mes_ref}</Text>
              <Text style={styled.cell}>{item.nivel_risco_bacen}</Text>
              <Text style={styled.cell}>{item.nivel_risco_crl}</Text>
             
            </View>
          );
        })
      ) : (
        <NoteItemRender />
      )}
    </View>
  );
}
