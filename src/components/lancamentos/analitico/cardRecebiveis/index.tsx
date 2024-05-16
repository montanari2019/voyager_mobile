import { Text, View } from "react-native";
import { CardItemComponent } from "../itemCard";
import { GraphicBarComponent } from "../../graphicBar";
import { dataGraphsDefaultSeries } from "../../../../utils/objects";
import { styled } from "./styled";
import { THEME_DARK } from "../../../../themes/global.theme";

export function CardRecebivies() {
  return (
    <View style={styled.cardAnaliticoItem}>
      <Text style={styled.textParagraphBold}>Recebíveis</Text>

      <CardItemComponent percentualValue={1} priceValue={50} title="Cartãos" />
      <CardItemComponent percentualValue={1} priceValue={50} title="Boleto" />

      <View style={styled.cardDataItem}>
        <GraphicBarComponent
          categories={dataGraphsDefaultSeries.categories}
          dataGraph={dataGraphsDefaultSeries.series.data}
          maxwidth={150}
          color={THEME_DARK.COLORS.GREEN_700}
        />
      </View>
    </View>
  );
}
