import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";

interface LoadingProps {
  color?: string;
  textFild?: boolean;
}

export function Loading({ color = THEME_DARK.COLORS.BASE_BORDER_500, textFild = false,}: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} />
      {textFild && <Text style={styles.textFild}>Carregando ...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  textFild: {
    color: THEME_DARK.COLORS.GRAY_200,
  },
});
