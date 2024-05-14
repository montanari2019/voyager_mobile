import { Text, View } from "react-native";
import { styled } from "./styled";
import Ionicons from '@expo/vector-icons/Ionicons';
import { THEME_DARK } from "../../themes/global.theme";

export function TimerComponent() {
  return (
    <View style={styled.container}>
     <Ionicons name="timer-outline" size={24} color={THEME_DARK.COLORS.GRAY_100} />
     <Text style={styled.subTitle}>25:20</Text>
    </View>
  );
}
