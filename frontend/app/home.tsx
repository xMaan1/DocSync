import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DocSync!</Text>  
      <TouchableHighlight 
        style={styles.button}
        onPress={() => router.push('/(doctor)/doctor_dashboard' as any)}
      >
        <Text style={styles.buttonText}>View Doctor Dashboard</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={styles.button}
        onPress={() => router.push('/(patient)/patient_dashboard' as any)}
      >
        <Text style={styles.buttonText}>View Patient Dashboard</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});