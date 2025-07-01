import { View, Text, TouchableWithoutFeedback, TouchableHighlight, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles } from '../../types';

export default function LoginScreen() {
    const router = useRouter();
  return (
    <SafeAreaView style={CommonStyles.safeContainer}>
      <View style={CommonStyles.centerContainer}>
        <Text style={CommonStyles.title}>Login to DocSync</Text>
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
          <Text style={CommonStyles.authButtonText}>Login</Text>
        </TouchableHighlight>
        
        <View style={CommonStyles.linkContainer}>
          <Text>Don't have an account? </Text>
          <TouchableWithoutFeedback onPress={() => router.push('/(auth)/register' as any)}>
            <View>
              <Text style={CommonStyles.linkText}>Register Now!</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}
