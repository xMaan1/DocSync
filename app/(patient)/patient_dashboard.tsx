import {View, Text, ScrollView} from 'react-native';
import {useRouter} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles } from '../../types';
import { DashboardHeader, DashboardCard } from '../../components';

export default function PatientDashboard() {
  const router = useRouter();

 return (
  <SafeAreaView style={CommonStyles.safeContainer}>
    <DashboardHeader
      greeting="Good Morning"
      userName="Ahmad Farhan"
      userType="patient"
      onProfilePress={() => router.push('/profile' as any)}
    />
    
    <ScrollView style={CommonStyles.scrollContainer}>
      <View style={CommonStyles.cardRow}>
        <DashboardCard
          number={3}
          title="Upcoming Appointments"
          isBlueNumber={true}
          isLargeCard={false}
        />
        
        <DashboardCard
          number={12}
          title="Medical Records"
          isBlueNumber={false}
          isLargeCard={false}
        />
      </View>
      
      <Text style={CommonStyles.sectionTitle}>My Appointments</Text>
      <View style={CommonStyles.cardColumn}>
        <DashboardCard
          number="Dr. Javaid Iqbal"
          title="Regular Checkup - Today 2:00 PM"
          isBlueNumber={true}
          isLargeCard={true}
        />
        <DashboardCard
          number="Dr. Asghar Butt"
          title="Follow-up - Tomorrow 10:00 AM"
          isBlueNumber={false}
          isLargeCard={true}
        />
      </View>
      
      <Text style={CommonStyles.sectionTitle}>Recent Reports</Text>
      <View style={CommonStyles.cardColumn}>
        <DashboardCard
          number="Blood Test"
          title="December 20, 2024"
          isBlueNumber={true}
          isLargeCard={true}
        />
        <DashboardCard
          number="X-Ray Report"
          title="December 18, 2024"
          isBlueNumber={false}
          isLargeCard={true}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
 );
}
