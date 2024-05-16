import { ScrollView, Text, View } from "react-native";
import { styled } from "./styled";
import { priceFromatter } from "../../utils/formate";
import { TotalizerAcount } from "../../components/lancamentos/cardTotalizerItem";
import { GraphicTotalLancamento } from "../../components/lancamentos/lancamentoTotal";
import { CardAnalitico } from "../../components/lancamentos/cardAnalitico";
import { CardAnaliticoTable } from "../../components/lancamentos/cardAnaliticoTable";

export function Lancamentos() {
  return (
    <ScrollView style={styled.container} showsVerticalScrollIndicator={false}>
      <Text style={styled.textTitle}>Lançamentos</Text>

      <View style={styled.cardTotalizer}>
        <Text style={styled.textParagraphRegular}>Total de Movimentação</Text>
        <Text style={styled.textParagraphBold}>{priceFromatter.format(0)}</Text>
      </View>

      <View style={styled.cardDadTotalizer}>
        <TotalizerAcount disabled numberAcount={658120} saldo={250} />
        <TotalizerAcount numberAcount={658120} saldo={22963396.13} />
        <TotalizerAcount numberAcount={658120} saldo={22963396.13} />
        <TotalizerAcount numberAcount={658120} saldo={22963396.13} />
      </View>

      <GraphicTotalLancamento />

      <CardAnalitico />

      <CardAnaliticoTable />
    </ScrollView>
  );
}
