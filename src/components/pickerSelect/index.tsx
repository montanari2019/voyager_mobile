import { StyleSheet, Text, View } from "react-native";
import PickerSelecter from "react-native-picker-select";
import { THEME_DARK } from "../../themes/global.theme";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import SelectDropdown from "react-native-select-dropdown";
import { headerSelectLancamento } from "../../utils/objects";

interface PickerSelectProps {
  data: {
    data_movimento: string;
    mes_ref: string;
  }[];
}
type headerType = (typeof headerSelectLancamento)[0];

export function PickerSelect({ data }: PickerSelectProps) {
  return (
    <SelectDropdown
      data={data}
      defaultValue={data[0]}
      onSelect={(selectedItem: headerType, index) => {
        console.log(selectedItem, index);
      }}
      renderButton={(selectedItem:headerType, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.mes_ref) || "Selecione algum item"}
            </Text>
            <Icon
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={THEME_DARK.COLORS.BASE_TEXT}
              style={styles.dropdownButtonArrowStyle}
            />
          </View>
        );
      }}
      renderItem={(item: headerType, index, isSelected) => {
        return (
          <View
            key={index}
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && {
                backgroundColor: THEME_DARK.COLORS.BASE_BORDER_500,
              }),
            }}
          >
            <Text style={styles.dropdownItemTxtStyle}>{item.mes_ref}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: THEME_DARK.COLORS.BLACK_OPACITY_02,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.BASE_BORDER_700,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginVertical: 20
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: THEME_DARK.COLORS.BASE_TEXT,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: THEME_DARK.COLORS.BASE_BG,
    borderRadius: 8,
    // marginVertical: 20
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: THEME_DARK.COLORS.BASE_TEXT,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
