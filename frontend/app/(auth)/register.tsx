import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

export default function RegisterScreen() {
  const router = useRouter();
  const [selectedUserType, setSelectedUserType] = useState(null);

  const userTypeData = [
    { label: 'Patient', value: 'patient' },
    { label: 'Doctor', value: 'doctor' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register for DocSync</Text>
      
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={userTypeData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select User Type"
        value={selectedUserType}
        onChange={item => {
          setSelectedUserType(item.value);
          console.log('Selected user type:', item.value);
        }}
      />
      
      <TextInput
        placeholder="Email"
        style={styles.emailInput}
      />
      
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.passwordInput}
      />
      
      <TouchableHighlight 
        style={styles.registerButton}
        onPress={() => router.replace('/home')}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableHighlight>
      
      <View style={styles.loginContainer}>
        <Text>Already have an account? </Text>
        <TouchableWithoutFeedback onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>Login Now!</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  emailInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  registerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
});