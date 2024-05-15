import {
  Text,
  TouchableOpacityProps,
  View
} from "react-native";
import { styled } from "./styled";


import { ButtonInterval } from "../buttonInverval";
import { GraphicBarComponent } from "../graphicBar";

interface TotalizerAcountProps extends TouchableOpacityProps {
  disabled?: boolean;
  saldo: number;
  numberAcount: number;
}

export function GraphicTotalLancamento() {
  return (
    <View style={styled.cardGraphic}>
      <Text style={styled.textTitle}>Lançamentos</Text>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ ...styled.textParagraphRegular, textAlign: "center" }}>
          Total de lançamentos no intervalo de{" "}
        </Text>
        <Text style={{ ...styled.textParagraphRegular, textAlign: "center" }}>
          12 meses{" "}
        </Text>

        <View style={styled.buttonFilters}>
          <ButtonInterval title="12 meses" isPressedButton />
          <ButtonInterval title="24 meses" />
          <ButtonInterval title="36 meses" />
        </View>
      </View>

      <GraphicBarComponent />
    </View>
  );
}
