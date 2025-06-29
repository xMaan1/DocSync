import { View, Text, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { CommonStyles } from '../../types/styles/styles';
import { CustomTextInput, CustomDropdown } from '../../components';

export default function RegisterScreen() {
  const router = useRouter();
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  const userTypeData = [
    { label: 'Patient', value: 'patient' },
    { label: 'Doctor', value: 'doctor' },
  ];

  return (
    <View style={CommonStyles.centerContainer}>
      <Text style={CommonStyles.title}>Register for DocSync</Text>
      
      <CustomDropdown
        data={userTypeData}
        value={selectedUserType}
        onChange={(item) => {
          setSelectedUserType(item.value);
          console.log('Selected user type:', item.value);
        }}
        placeholder="Select User Type"
        isAuthDropdown={true}
      />
      
      <CustomTextInput
        placeholder="Email"
        isAuthInput={true}
        keyboardType="email-address"
      />
      
      <CustomTextInput
        placeholder="Password"
        isAuthInput={true}
        secureTextEntry
      />
      
      <TouchableHighlight 
        style={CommonStyles.authButton} 
        onPress={() => router.replace('/home')}
      >
        <Text style={CommonStyles.authButtonText}>Register</Text>
      </TouchableHighlight>
      
      <View style={CommonStyles.linkContainer}>
        <Text>Already have an account? </Text>
        <TouchableWithoutFeedback onPress={() => router.push('/(auth)/login' as any)}>
          <Text style={CommonStyles.linkText}>Login Now!</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
