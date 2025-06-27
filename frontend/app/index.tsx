import {Text, View, StyleSheet, ActivityIndicator} from "react-native";
import {useEffect} from "react";
import {useRouter} from 'expo-router';

export default function SplashScreen() {
    const router = useRouter();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 3000);
        
        return () => clearTimeout(timer); 
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DocSync</Text>
            <Text style={styles.subtitle}>Healthcare Management</Text>
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    animating={true}
                    size="large" 
                    color="#007AFF" 
                    style={{transform: [{scale: 1.5}]}} // Optional: Adjust size
                />
            </View>
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
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    indicatorContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});