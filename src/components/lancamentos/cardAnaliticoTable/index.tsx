import { Text, View } from "react-native";
import { styled } from "./styled";

import { lancamentoDescricao } from "../../../utils/objects";
import { TableLancamento } from "../../tables/tableLancemanto";
import { InputComponent } from "../../input";

export function CardAnaliticoTable() {
  return (
    <View style={styled.container}>
      <View style={{ marginBottom: 25, marginTop: 15 }}>
        <Text style={styled.textTitle}>Lançamentos Modalidade</Text>
      </View>

      <View style={{marginVertical: 15}}>
        <InputComponent
          label="Digite o nome do Lançamento"
          placeholder="PIX RECEBIO - OUTRA IF"
          returnKeyType="search"
        />
      </View>

      <TableLancamento
        header={["Modalidade", "Código", "Valor"]}
        data={lancamentoDescricao}
      />
    </View>
  );
}
