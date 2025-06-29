import { TextInput, View, Text } from 'react-native';
import { CommonStyles } from '../types/styles/styles';

export default function CustomTextInput({ 
  label, 
  isAuthInput, 
  isAddressInput, 
  ...props 
}: { 
  label?: string; 
  isAuthInput: boolean;
  isAddressInput?: boolean;
  [key: string]: any;
}) {
  let inputStyle;
  if (isAuthInput) {
    inputStyle = CommonStyles.authInput;
  } else if (isAddressInput) {
    inputStyle = [CommonStyles.textInput, CommonStyles.addressInput];
  } else {
    inputStyle = CommonStyles.textInput;
  }

  const containerStyle = isAuthInput ? { width: '100%' as const } : CommonStyles.inputGroup;

  return (
    <View style={containerStyle}>
      {label && <Text style={CommonStyles.label}>{label}</Text>}
      <TextInput style={inputStyle} {...props} />
    </View>
  );
}