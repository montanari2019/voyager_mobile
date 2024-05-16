import { Text, View } from "react-native";
import { styled } from "./styled";

import { Separator } from "../../separator";
import { CardEspecie } from "../analitico/cardEspecie";
import { CardRecebivies } from "../analitico/cardRecebiveis";
import { CardTransferencias } from "../analitico/cardTransferencias";
import { TableLancamento } from "../../tables/tableLancemanto";
import { lancamentoDescricao } from "../../../utils/objects";

export function CardAnalitico() {
  return (
    <View style={styled.container}>
      <View style={{ marginBottom: 25, marginTop: 15 }}>
        <Text style={styled.textTitle}>Analítico Conta Corrente</Text>
      </View>

      <CardRecebivies />
      <Separator />

      <CardEspecie />
      <Separator />

      <CardTransferencias />


     
    </View>
  );
}
