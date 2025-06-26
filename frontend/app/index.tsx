import {Text, View, StyleSheet, ActivityIndicator} from "react-native";
import {useEffect, useState} from "react";
import {useRouter} from 'expo-router';

export default function SplashScreen() {
    const router = useRouter();
    const timer = setTimeout(() => {
        router.replace('/login');
    }, 3000); 
    useEffect(() => {
        return () => clearTimeout(timer); 
    }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DocSync</Text>
      <Text>Healthcare Management</Text>
        <ActivityIndicator size="large" color="#007AFF" />
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});