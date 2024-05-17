import { Text, View } from "react-native";
import { styled } from "./styled";
import { TableRisco } from "../../tables/tableRisco";
import {
  graphicIndiceEndividamento,
  riscoCollection,
} from "../../../utils/objects";
import { GraphicBarComponent } from "../../graphicBar";
import { THEME_DARK } from "../../../themes/global.theme";

export function EndividamentoPeríodo() {
  return (
    <View style={styled.container}>
      <Text style={styled.textTitle}>Indice de Endividamento por Período</Text>
      <View style={{ marginVertical: 20 }}>
        <GraphicBarComponent
          dataGraph={graphicIndiceEndividamento.series.data}
          categories={graphicIndiceEndividamento.categories}
          color={THEME_DARK.COLORS.GREEN_300}
          maxwidth={200}
        />
      </View>
    </View>
  );
}
