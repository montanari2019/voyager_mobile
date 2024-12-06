import { Text, View } from "react-native";
import { styled } from "./styled";

export function VisaoAssociado(){
    return(
        <View style={styled.viewCardItem}>
        <View style={{alignItems:  "center", justifyContent: 'center'}}>
          <Text style={styled.textParagraphBold}>Visão Associado</Text>
          <Text style={styled.textParagraphRegularSm}>2024-04</Text>
        </View>
        <View style={styled.viewCardText}>
          {/* <Text style={styled.textTitle}>Visão Associado</Text> */}
          <Text style={styled.textParagraphRegular}>Nome</Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            Empresa - Comercio, Distribuicao e Representacao de Frios
            Rondonia Ltda
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>CNPJ/CPF</Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            05.452.871/0051-07
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>Data associado</Text>
          <Text style={styled.textParagraphBold}>30/03/2000</Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>Grupo Economico: </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            Friron
          </Text>
        </View>
        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>
            Renda Bruta Mensal:{" "}
          </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            24.171.848,30
          </Text>
        </View>
        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>
            Saldo Conta Capital:{" "}
          </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            12.670,95
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>Bem Móvel: </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            132.937,00
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>Bem Imóvel: </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            500.000,00
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>Limite Cartão: </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            7.000,00
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>
            Limite Conta Corrente:{" "}
          </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            10.000,000
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>
            Dias Ult Limite C/C:{" "}
          </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            14
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>Dias Ult ADP: </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            14
          </Text>
        </View>

        <View style={styled.viewCardText}>
          <Text style={styled.textParagraphRegular}>Saldo Poupança: </Text>
          <Text style={styled.textParagraphBold} numberOfLines={1}>
            608,12
          </Text>
        </View>
      </View>
    )
}