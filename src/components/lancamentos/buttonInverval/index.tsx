import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styled } from "./styled";
import { THEME_DARK } from "../../../themes/global.theme";
import { useState } from "react";

interface ButtonIntervalProps extends TouchableOpacityProps {
  title: string;
  isPressedButton?: boolean;
}

export function ButtonInterval({
  title,
  isPressedButton = false,
  ...resto
}: ButtonIntervalProps) {
  const [isPressed, setIsPressed] = useState(isPressedButton);

  const handlePress = () => {
    if (isPressed) {
      setIsPressed(!isPressed);
    } else {
      setIsPressed(!isPressed);
    }
  };
  return (
    <TouchableOpacity {...resto} onPress={handlePress} style={styled.container}>
      <View style={styled.buttonDad}>
        <View
          style={{
            ...styled.buttonChildren,
            backgroundColor: isPressed
              ? THEME_DARK.COLORS.BASE_BORDER_500
              : THEME_DARK.COLORS.BASE_TEXT,
          }}
        ></View>
      </View>
      <Text style={styled.textParagraphRegularSm}>{title}</Text>
    </TouchableOpacity>
  );
}
