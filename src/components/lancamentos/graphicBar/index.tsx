import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { calcularLarguraValores } from "../../../utils/generateItemGraph";
import { styled } from "./styled";
import { priceFromatter } from "../../../utils/formate";

const dataGraphsDefault: any = {
  cpf_cnpj: "00887957218",
  ultima_data_base: "2024-03-01T08:00:00.000Z",
  categories: [
    "2023-04",
    "2023-05",
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10",
    "2023-11",
    "2023-12",
    "2024-01",
    "2024-02",
    "2024-03",
  ],
  series: {
    name: "Lançamentos Crédito",
    // data: [
    //   7285.24,
    //   20408.18,
    //   6148.77,
    //   5686.84,
    //   11102.260000000002,
    //   10096.07,
    //   4336.49,
    //   5622.93,
    //   12812.83,
    //   10346.38,
    //   5269.77,
    //   7187.8
    // ],
    // data: [
    //   14928923.559999993, 20711629.870000005, 19917384.720000003,
    //   16740847.570000002, 15762565.37, 16301680.010000002, 18840090.119999997,
    //   17967941.73, 23956523.39, 22351887.63, 17221338.45, 20262583.709999997,
    // ],
    data: [
     0, 0,0,
      0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ],
  },
};

interface Item {
  value: number;
  width: number;
  category: string;
  id:string
}

export function GraphicBarComponent() {
  const [dataGraphic, setDataGraphic] = useState<Item[]>([]);

  useEffect(() => {
    const data = calcularLarguraValores(
      dataGraphsDefault.series.data,
      dataGraphsDefault.categories,
      250
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
