import { TextInput, View, Text, TouchableHighlight, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to DocSync</Text>
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
        style={styles.loginButton}
        onPress={() => router.replace('/home')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>
    <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
    <TouchableWithoutFeedback onPress={() => router.push('/(auth)/register' as any)}>
      <View>
        <Text style={styles.signupText}>Register Now!</Text>
      </View>
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
    loginButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 8,
    },
    loginText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    signupContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    signupText: {
      color: '#007AFF',
      fontWeight: 'bold',
    },
});