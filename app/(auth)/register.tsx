import { View, Text, TouchableWithoutFeedback, TouchableHighlight, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles } from '../../types';

export default function RegisterScreen() {
  const router = useRouter();
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  return (
    <SafeAreaView style={CommonStyles.safeContainer}>
      <View style={CommonStyles.centerContainer}>
      <Text style={CommonStyles.title}>Register for DocSync</Text>
      
      <TouchableHighlight 
        style={[CommonStyles.authInput, {justifyContent: 'center', backgroundColor: '#f5f5f5'}]}
        onPress={() => {
          if (selectedUserType === 'patient') {
            setSelectedUserType('doctor');
          } else {
            setSelectedUserType('patient');
          }
        }}
      >
        <Text style={{color: selectedUserType ? '#000' : '#666'}}>
          {selectedUserType ? (selectedUserType === 'patient' ? 'Patient' : 'Doctor') : 'Select User Type'}
        </Text>
      </TouchableHighlight>
      
      <TextInput 
        style={CommonStyles.authInput}
        placeholder="Email"
        keyboardType="email-address"
      />
      
      <TextInput 
        style={CommonStyles.authInput}
        placeholder="Password"
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
    </SafeAreaView>
  );
}
