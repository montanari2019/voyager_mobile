import { Text, View } from "react-native";
import { CardItemComponent } from "../itemCard";
import { styled } from "./styled";
import { THEME_DARK } from "../../../themes/global.theme";

export function EndividamentoUmAno() {
  return (
    <View style={styled.container}>
      <Text style={styled.textTitle}>Endividamento No Período de 1 Ano</Text>

      <View>
        <CardItemComponent
          title="Menor Endividamento No Período"
          value={0}
          format="price"
        />
        <CardItemComponent
          title="Maior Endividamento No Período"
          value={0}
          borderColorItem={THEME_DARK.COLORS.DANGER_500}
        />
        <CardItemComponent
          title="Evolução Bacen Em 12 Meses"
          value={152582154542.21}
        />

        <CardItemComponent
          title="Evolução Bacen Em 12 Meses"
          value={0.0155}
          format="percent"
        />
      </View>
    </View>
  );
}
