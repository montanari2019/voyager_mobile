  import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
  import { styled } from "./styled";
  import { BlurView } from "expo-blur";
  import { InputComponent } from "../../components/input";
import { VisaoAssociado } from "../../components/visaoAssociado/visaoAssociadoComponent";

  export function HomeVisaoAssociado() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styled.container}>
          <InputComponent keyboardType="default" placeholder="000.000.000-00" />

          <View style={styled.viewCard}>
            <Text style={styled.textTitle}>Início</Text>

              <VisaoAssociado/>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
