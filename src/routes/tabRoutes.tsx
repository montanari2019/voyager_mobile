import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { THEME_DARK } from "../themes/global.theme";
import { Platform, View } from "react-native";
import { HomeVisaoAssociado } from "../screens/home";
import { Lancamentos } from "../screens/lancamentos";
import { Endividamento } from "../screens/endividamento";
import { Sobras } from "../screens/sobras";

type AuthRoutesProps = {
  home: undefined;
  lancamento: undefined;
  endividamento: undefined;
  sobras: undefined;
};
export type AuthNavigatorRoutesPrivadeProps =
  BottomTabNavigationProp<AuthRoutesProps>;

export function TabRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator<AuthRoutesProps>();
  return (
//    <View style={{flex: 1}}>
     <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: THEME_DARK.COLORS.PURPLE_500,
        tabBarInactiveTintColor: THEME_DARK.COLORS.GRAY_200,
        tabBarStyle: {
          backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY_02,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: 36,
          paddingTop: 25,
          
        },
      }}
    >
      
      <Screen
        name="home"
        component={HomeVisaoAssociado}
      />
      <Screen
        name="lancamento"
        component={Lancamentos}
      />
      <Screen
        name="endividamento"
        component={Endividamento}
      />
      <Screen
        name="sobras"
        component={Sobras}
      />
    </Navigator>
//    </View>
  );
}
