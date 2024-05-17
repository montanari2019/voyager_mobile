import { Text, View } from "react-native";
import { styled } from "./styled";
import { TableRisco } from "../../tables/tableRisco";
import { riscoCollection } from "../../../utils/objects";

export function RiscoCrlBacen() {
  return (
    <View style={styled.container}>
      <Text style={styled.textTitle}>Risco CRL</Text>

      <TableRisco data={riscoCollection} header={["Mês referencia", "Risco Bacen", "Risco CRL"]}/> 
    </View>
  );
}
