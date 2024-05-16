import { Text, View } from "react-native";
import { CardItemComponent } from "../itemCard";
import { GraphicBarComponent } from "../../graphicBar";
import { dataGraphsDefaultSeries } from "../../../../utils/objects";
import { styled } from "./styled";
import { THEME_DARK } from "../../../../themes/global.theme";

export function CardTransferencias() {
  return (
    <View style={styled.cardAnaliticoItem}>
      <Text style={styled.textParagraphBold}>Transferências</Text>

      <CardItemComponent percentualValue={1} priceValue={50} title="Crédito TED / DOC / TEC" />
      <CardItemComponent percentualValue={1} priceValue={50} title="Dep. Espécie / Cheque Ag" />

      <View style={styled.cardDataItem}>
        <GraphicBarComponent
          categories={dataGraphsDefaultSeries.categories}
          dataGraph={dataGraphsDefaultSeries.series.data}
          maxwidth={150}
          color={THEME_DARK.COLORS.PURPLE_700}
        />
      </View>
    </View>
  );
}
