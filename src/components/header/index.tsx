import { Text, View } from "react-native";
import { styled } from "./styled";
import { TimerComponent } from "../timer";

export function HeaderComponent() {
  return (
    <View style={styled.header}>
      <View>
        <Text style={styled.headerNameSubTitle}>Bem vindo a Control Finance</Text>
        <Text style={styled.headerNameTitle}>Ikaro Montanari</Text>
      </View>

      <TimerComponent />
    </View>
  );
}
