import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {useRouter} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles, DashboardStyles } from '../../types';

export default function DoctorDashboard() {
  const router = useRouter();

 return (
  <SafeAreaView style={CommonStyles.safeContainer}>
    <View style={DashboardStyles.section1}>
      <View style={DashboardStyles.textContainer}>
        <Text style={DashboardStyles.dashboardHeaderTitle}>Good Morning</Text>
        <Text style={DashboardStyles.dashboardHeaderSubtitle}>Dr. Smith</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => router.push('/profile' as any)}>
        <View style={CommonStyles.profileIcon}>
          <Text style={CommonStyles.profileText}>👤</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    
    <ScrollView style={CommonStyles.scrollContainer}>
      <View style={CommonStyles.cardRow}>
        <View style={CommonStyles.card}>
          <Text style={CommonStyles.cardNumber1}>12</Text>
          <Text style={CommonStyles.cardTitle}>Today's Appointments</Text>
        </View>
        
        <View style={CommonStyles.card}>
          <Text style={CommonStyles.cardNumber2}>48</Text>
          <Text style={CommonStyles.cardTitle}>Total Patients</Text>
        </View>
      </View>
      
      <Text style={CommonStyles.sectionTitle}>Today's Appointments</Text>
      <View style={CommonStyles.cardColumn}>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber1}>Abdulrehman Bilal</Text>
          <Text style={CommonStyles.cardTitle}>Regular Checkup</Text>
        </View>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber2}>Hassan Shahzad</Text>
          <Text style={CommonStyles.cardTitle}>Follow-up</Text>
        </View>
      </View>
      
      <Text style={CommonStyles.sectionTitle}>Recent Patients</Text>
      <View style={CommonStyles.cardColumn}>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber1}>Ali Khan</Text>
          <Text style={CommonStyles.cardTitle}>Consultation</Text>
        </View>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber2}>Hadi Bharara</Text>
          <Text style={CommonStyles.cardTitle}>Follow-up</Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
 );
}