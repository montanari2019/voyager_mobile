import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { InputComponent } from "../../components/input";
import { VisaoAssociado } from "../../components/visaoAssociado/visaoAssociadoComponent";
import { styled } from "./styled";
import backgroundImg from "../../assets/bg_purple.png";
import { Investimento } from "../../components/visaoAssociado/investimentos";
import { Endividamento } from "../../components/visaoAssociado/endividamento";
import { BacenVencer } from "../../components/visaoAssociado/bacenVencer";

export function HomeVisaoAssociado() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
     
      <SafeAreaView style={styled.container}>
        
        <View style={styled.viewCard}>
          <Text style={styled.textTitle}>Início</Text>

          <VisaoAssociado />
          <Investimento />
          <BacenVencer />
          <Endividamento />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
