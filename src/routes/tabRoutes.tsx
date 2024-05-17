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
import Ionicons from '@expo/vector-icons/Ionicons';


type AuthRoutesProps = {
  home: undefined;
  lancamento: undefined;
  endividamento: undefined;
  sobras: undefined;
};
export type AuthNavigatorRoutesPrivadeProps =
  BottomTabNavigationProp<AuthRoutesProps>;

export function TabRoutes() {
  const iconSize = 25;
  const { Navigator, Screen } = createBottomTabNavigator<AuthRoutesProps>();
  return (
//    <View style={{flex: 1}}>
     <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: THEME_DARK.COLORS.PURPLE_500,
        tabBarInactiveTintColor: THEME_DARK.COLORS.GRAY_200,
        tabBarLabelStyle:{
          paddingTop: 5,
          textTransform: 'capitalize'
        },
        tabBarStyle: {
          backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY_02,
          borderTopWidth: 0,
          height: 100,
          paddingBottom: 36,
          paddingTop: 25,
          
        },
      }}
    >
      
      <Screen
        name="home"
        component={HomeVisaoAssociado}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={iconSize} color={color} />
          ),
         
        }}

      />
      <Screen
        name="lancamento"
        component={Lancamentos}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cash" size={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="endividamento"
        component={Endividamento}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="lock-closed" size={iconSize} color={color} />
          ),
        }}
        
      />
      {/* <Screen
        name="sobras"
        component={Sobras}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={iconSize} color={color} />
          ),
        }}
      /> */}
    </Navigator>
//    </View>
  );
}
