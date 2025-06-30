import { Text, View, TouchableHighlight } from "react-native";
import { useRouter } from 'expo-router';
import { CommonStyles } from '../types';

export default function Index() {
  const router = useRouter();

  return (
    <View style={CommonStyles.centerContainer}>
      <Text style={CommonStyles.title}>Welcome to DocSync!</Text>  
      <TouchableHighlight 
        style={CommonStyles.button}
        onPress={() => router.push('/(doctor)/doctor_dashboard' as any)}
      >
        <Text style={CommonStyles.buttonText}>View Doctor Dashboard</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={CommonStyles.button}
        onPress={() => router.push('/(patient)/patient_dashboard' as any)}
      >
        <Text style={CommonStyles.buttonText}>View Patient Dashboard</Text>
      </TouchableHighlight>
    </View>
  );
}