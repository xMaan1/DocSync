import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {useRouter} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles, DashboardStyles } from '../../types';

export default function PatientDashboard() {
  const router = useRouter();

 return (
  <SafeAreaView style={CommonStyles.safeContainer}>
    <View style={DashboardStyles.section1}>
      <View style={DashboardStyles.textContainer}>
        <Text style={DashboardStyles.dashboardHeaderTitle}>Good Morning</Text>
        <Text style={DashboardStyles.dashboardHeaderSubtitle}>Ahmad Farhan</Text>
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
          <Text style={CommonStyles.cardNumber1}>3</Text>
          <Text style={CommonStyles.cardTitle}>Upcoming Appointments</Text>
        </View>
        
        <View style={CommonStyles.card}>
          <Text style={CommonStyles.cardNumber2}>12</Text>
          <Text style={CommonStyles.cardTitle}>Medical Records</Text>
        </View>
      </View>
      
      <Text style={CommonStyles.sectionTitle}>My Appointments</Text>
      <View style={CommonStyles.cardColumn}>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber1}>Dr. Javaid Iqbal</Text>
          <Text style={CommonStyles.cardTitle}>Regular Checkup - Today 2:00 PM</Text>
        </View>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber2}>Dr. Asghar Butt</Text>
          <Text style={CommonStyles.cardTitle}>Follow-up - Tomorrow 10:00 AM</Text>
        </View>
      </View>
      
      <Text style={CommonStyles.sectionTitle}>Recent Reports</Text>
      <View style={CommonStyles.cardColumn}>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber1}>Blood Test</Text>
          <Text style={CommonStyles.cardTitle}>December 20, 2024</Text>
        </View>
        <View style={CommonStyles.card2}>
          <Text style={CommonStyles.cardNumber2}>X-Ray Report</Text>
          <Text style={CommonStyles.cardTitle}>December 18, 2024</Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
 );
}
