import { Text, View } from "react-native";
import { THEME_DARK } from "../../themes/global.theme";
import Ionicons from '@expo/vector-icons/Ionicons';


export function NoteItemRender() {
  return (
    <View>
      <Text
        style={{
          color: THEME_DARK.COLORS.BASE_TEXT,
          fontSize: THEME_DARK.FONT_SIZE.SM,
          fontWeight: "normal",
        }}
      >
        {" "}
        Não existe dados a serem mostrados
      </Text>

      <Ionicons name="alert-circle-sharp" size={24} color={THEME_DARK.COLORS.BASE_BORDER_500} />

    </View>
  );
}
