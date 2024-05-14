import { Text, TextInput, TextInputProps, View } from "react-native";
import { styled } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { THEME_DARK } from "../../themes/global.theme";
import { useState } from "react";

interface InputComponentProps extends TextInputProps {
  disabled?: boolean;
}

export function InputComponent({ disabled = false, ...resto}: InputComponentProps) {

  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = [
    styled.inputDefault,
    isFocused && styled.inputActive,
    disabled && styled.inputError,
  ];

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

 

  return (
    <>
      <Text style={styled.label}>Digite o CPF /CNPJ para pesquisar</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={containerStyle}
        {...resto}
        placeholderTextColor={THEME_DARK.COLORS.GRAY_300}
      />
    </>
  );
}
