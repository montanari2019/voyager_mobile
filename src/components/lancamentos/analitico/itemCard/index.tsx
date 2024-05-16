import { Text, View } from "react-native";
import { percentFromatterDefault, priceFromatter } from "../../../../utils/formate";
import { styled } from "./styled";



interface CardItemComponentProps {
  title: string
  priceValue: number
  percentualValue: number
}

export function CardItemComponent({ percentualValue, priceValue, title }:CardItemComponentProps){
    return(
        <View style={styled.cardDataItem}>
          <Text style={styled.textParagraphRegular}>{title}</Text>
          <View style={styled.cardDataItemChildren}>
            <Text style={styled.textParagraphBold}>
              {priceFromatter.format(priceValue)}
            </Text>
          </View>
          <View style={styled.cardDataItemChildren}>
            <Text style={styled.textParagraphBold}>
              {percentFromatterDefault.format(percentualValue)}
            </Text>
          </View>
        </View>
    )
}