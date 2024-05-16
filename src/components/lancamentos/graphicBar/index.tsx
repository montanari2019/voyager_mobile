import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { calcularLarguraValores } from "../../../utils/generateItemGraph";
import { styled } from "./styled";
import { priceFromatter } from "../../../utils/formate";
import { THEME_DARK } from "../../../themes/global.theme";



interface Item {
  value: number;
  width: number;
  category: string;
  id:string
}


interface GraphicBarComponentProps {
  color?: string;
  categories: string[],
  dataGraph: number[],
  maxwidth?: number
}

export function GraphicBarComponent({ categories, dataGraph, maxwidth = 250, color = THEME_DARK.COLORS.BASE_BORDER_500 }:GraphicBarComponentProps) {
  const [dataGraphic, setDataGraphic] = useState<Item[]>([]);

  useEffect(() => {
    const data = calcularLarguraValores(
      dataGraph,
      categories,
      maxwidth
    );
    setDataGraphic(data);
    // console.log(data);
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ gap: 10 }}>
        {dataGraphic.map((index) => {
          return (
            <View key={index.id} style={styled.graphicItemDad}>
              <Text style={styled.textParagraphRegularSm}>
                {index.category}
              </Text>
              <View style={styled.displayIten}>
                <View
                  style={{
                    ...styled.graphicItemChildren,
                    backgroundColor:color,
                    width: index.width,
                  }}
                >
                  <Text style={styled.textParagraphBold}>
                    {priceFromatter.format(index.value)}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
