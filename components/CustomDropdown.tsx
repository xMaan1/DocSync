import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { CommonStyles } from '../types';

export default function CustomDropdown({
  label,
  data,
  value,
  onChange,
  placeholder = 'Select an option',
  isAuthDropdown
}: {
  label?: string;
  data: { label: string; value: string }[];
  value: string | null;
  onChange: (item: { label: string; value: string }) => void;
  placeholder?: string;
  isAuthDropdown: boolean;
}) {
  const dropdownStyle = isAuthDropdown ? CommonStyles.dropdownAuth : CommonStyles.dropdown;
  const containerStyle = isAuthDropdown ? { width: '100%' as const } : CommonStyles.inputGroup;

  return (
    <View style={containerStyle}>
      {label && <Text style={CommonStyles.label}>{label}</Text>}
      <Dropdown
        style={dropdownStyle}
        placeholderStyle={CommonStyles.placeholderStyle}
        selectedTextStyle={CommonStyles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </View>
  );
}