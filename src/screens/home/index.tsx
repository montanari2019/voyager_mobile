import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { InputComponent } from "../../components/input";
import { VisaoAssociado } from "../../components/visaoAssociado/visaoAssociadoComponent";
import { styled } from "./styled";
import { Investimento } from "../../components/visaoAssociado/investimentos";
import { Endividamento } from "../../components/visaoAssociado/endividamento";
import { BacenVencer } from "../../components/visaoAssociado/bacenVencer";

export function HomeVisaoAssociado() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styled.container}>
        <InputComponent keyboardType="default" placeholder="000.000.000-00" />
        <View style={styled.viewCard}>
          <Text style={styled.textTitle}>Início</Text>

          <BacenVencer />
          <Endividamento />
          <Investimento />
          <VisaoAssociado />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
