import { Text, View } from "react-native";

import { styled } from "./styled";
import {
  percentFromatterDefault,
  priceFromatter,
} from "../../../utils/formate";
import { THEME_DARK } from "../../../themes/global.theme";

interface CardItemComponentProps {
  title: string;
  value: number;
  borderColorItem?: string;
  format?: "price" | "percent";
}

export function CardItemComponent({
  format = "price",
  value,
  title,
  borderColorItem = THEME_DARK.COLORS.BASE_BORDER_500,
}: CardItemComponentProps) {
  return (
    <View style={{ ...styled.cardDataItem, borderColor: borderColorItem }}>
      <Text style={styled.textParagraphRegular}>{title}</Text>
      <View style={{...styled.cardDataItemChildren, borderColor: borderColorItem}}>
        <Text style={styled.textParagraphBold}>
          {format === "price"
            ? priceFromatter.format(value)
            : percentFromatterDefault.format(value)}
        </Text>
      </View>
    </View>
  );
}
