import {Text, View, ActivityIndicator} from "react-native";
import {useEffect} from "react";
import {useRouter} from 'expo-router';
import { CommonStyles, Colors } from '../types';

export default function SplashScreen() {
    const router = useRouter();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 3000);
        
        return () => clearTimeout(timer); 
    }, []);

    return (
        <View style={CommonStyles.centerContainer}>
            <Text style={CommonStyles.title}>DocSync</Text>
            <Text style={CommonStyles.subtitle}>Healthcare Management</Text>
            <View style={CommonStyles.indicatorContainer}>
                <ActivityIndicator
                    size="large" 
                    color={Colors.primary} 
                    style={{transform: [{scale: 1.5}]}}
                />
            </View>
        </View>
    );
}