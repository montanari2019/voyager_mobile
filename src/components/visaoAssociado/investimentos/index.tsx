import { Text, View } from "react-native";
import { styled } from "./styled";

export function Investimento() {
  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <Text style={styled.textParagraphBold}>Investimentos</Text>
        <Text style={styled.textParagraphRegularSm}>2024-04</Text>
      </View>

      <View style={styled.viewCardText}>
        <View >
            <Text  style={styled.textParagraphRegular}>LCI</Text>
            <Text  style={styled.textParagraphBold}>24.171.848,30</Text>
        </View>
        <View>
            <Text  style={styled.textParagraphRegular}>LCA</Text>
            <Text  style={styled.textParagraphBold}>24.171.848,30</Text>
        </View>
        <View>
            <Text  style={styled.textParagraphRegular}>RDC</Text>
            <Text  style={styled.textParagraphBold}>24.171.848,30</Text>
        </View>
      </View>
    </View>
  );
}
