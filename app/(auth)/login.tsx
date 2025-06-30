import { View, Text, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles } from '../../types';
import { CustomTextInput } from '../../components';

export default function LoginScreen() {
    const router = useRouter();
  return (
    <SafeAreaView style={CommonStyles.safeContainer}>
      <View style={CommonStyles.centerContainer}>
        <Text style={CommonStyles.title}>Login to DocSync</Text>
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
