import { Text, View } from "react-native";
import { styled } from "./styled";
import { decimalFromatter } from "../../../utils/formate";
import { NoteItemRender } from "../../notItem";
const data = {
  cpf_cnpj: "string",
  id: "string",
  data_movimento: "string",
  mes_ref: "string",
  tipo_lancamento: "string",
  lancamentos_codigos: "string",
  lancamento_total: 0,
  codigo_lancamento: 0,
};
type dataType = typeof data;

interface TableLancamentoProps {
  header: string[];
  data: dataType[];
}

export function TableLancamento({ data, header }: TableLancamentoProps) {
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
            <View key={item.id} style={getRowStyle(index)}>
              <Text style={styled.cell}>{item.lancamentos_codigos}</Text>
              <Text style={styled.cell}>
                {decimalFromatter.format(Number(item.codigo_lancamento))}
              </Text>
              <Text style={styled.cell}>
                {decimalFromatter.format(Number(item.lancamento_total))}
              </Text>
            </View>
          );
        })
      ) : (
        <NoteItemRender />
      )}
    </View>
  );
}
