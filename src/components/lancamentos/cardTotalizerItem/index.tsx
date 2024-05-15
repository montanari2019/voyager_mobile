import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { priceFromatter } from "../../../utils/formate";
import { styled } from "./styled";
import { useState } from "react";


interface TotalizerAcountProps extends TouchableOpacityProps{
    disabled?: boolean;
    saldo: number;
    numberAcount: number;

}

export function TotalizerAcount({ numberAcount, saldo ,disabled = false, ...resto }: TotalizerAcountProps) {

    const [isPress, setIsPress] = useState(false);

  const containerStyle = [
    styled.cardTotalizerAcount,
    isPress && styled.cardTotalizerAcountActive,
    disabled && styled.cardTotalizerAcountDisable,
  ];
  const containerStyleChildren = [
    styled.cardTotalizerAcountIten,
    isPress && styled.cardTotalizerAcountItenActive,
    disabled && styled.cardTotalizerAcountItenDisable,
  ];

  const handleFocus = () => {
   if(isPress){
    setIsPress(!isPress);
   }else {
    setIsPress(!isPress);
   }
  };

 
  return (
    <TouchableOpacity style={containerStyle} {...resto} onPress={handleFocus}>
      <Text style={styled.textParagraphRegularCenter}>N° {numberAcount}</Text>
      <View style={containerStyleChildren}>
        <Text style={styled.textParagraphRegular}>Saldo:</Text>
        <Text style={styled.textParagraphBold}>
          {priceFromatter.format(saldo)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
