import { View } from "react-native";
import { HeaderComponent } from "../header";
import { InputComponent } from "../input";

export function HeaderSession() {
  return (
    <View style={{gap: 15, marginBottom: 25}}>
      <HeaderComponent />

      <View>
      <InputComponent keyboardType="default" placeholder="000.000.000-00" />

      </View>
    </View>
  );
}
