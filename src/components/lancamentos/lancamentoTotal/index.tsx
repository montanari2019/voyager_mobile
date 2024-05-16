import { Text, TouchableOpacityProps, View } from "react-native";
import { styled } from "./styled";

import { ButtonInterval } from "../buttonInverval";
import { GraphicBarComponent } from "../graphicBar";
import { priceFromatter } from "../../../utils/formate";
import { dataGraphsDefaultComplete } from '../../../utils/objects'

interface TotalizerAcountProps extends TouchableOpacityProps {
  disabled?: boolean;
  saldo: number;
  numberAcount: number;
}

export function GraphicTotalLancamento() {
  return (
    <View style={styled.cardGraphic}>
      <Text style={styled.textTitle}>Lançamentos</Text>
      <Text style={{ ...styled.textParagraphRegularSm }}>
        Total de lançamentos no intervalo de 12 meses
      </Text>
      <View style={{ marginVertical: 10 }}>
        <View style={styled.buttonFilters}>
          <ButtonInterval title="12 meses" isPressedButton />
          <ButtonInterval title="24 meses" />
          <ButtonInterval title="36 meses" />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <GraphicBarComponent 
          categories={dataGraphsDefaultComplete.categories}
          dataGraph={dataGraphsDefaultComplete.series.data}
          
        
        />
      </View>

      <View style={styled.resumoMovimentacao}>
        <View style={styled.itemMovimentacao}>
          <Text style={styled.textParagraphRegular}>Total Movimentado</Text>
          <Text style={styled.textParagraphBold}>
            {priceFromatter.format(0)}
          </Text>
        </View>

        <View style={styled.itemMovimentacao}>
          <Text style={styled.textParagraphRegular}>Média de movimentação</Text>
          <Text style={styled.textParagraphBold}>
            {priceFromatter.format(0)}
          </Text>
        </View>

        <View style={styled.itemMovimentacao}>
          <Text style={styled.textParagraphRegular}>Maior Pico</Text>
          <Text style={styled.textParagraphBold}>2024-04</Text>
        </View>
      </View>
    </View>
  );
}
