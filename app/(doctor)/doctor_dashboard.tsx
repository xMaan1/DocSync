import {View, Text, ScrollView} from 'react-native';
import {useRouter} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles } from '../../types';
import { DashboardHeader, DashboardCard } from '../../components';

export default function DoctorDashboard() {
  const router = useRouter();

 return (
  <SafeAreaView style={CommonStyles.safeContainer}>
    <DashboardHeader
      greeting="Good Morning"
      userName="Dr. Smith"
      userType="doctor"
      onProfilePress={() => router.push('/profile' as any)}
    />
    
    <ScrollView style={CommonStyles.scrollContainer}>
      <View style={CommonStyles.cardRow}>
        <DashboardCard
          number={12}
          title="Today's Appointments"
          isBlueNumber={true}
          isLargeCard={false}
        />
        
        <DashboardCard
          number={48}
          title="Total Patients"
          isBlueNumber={false}
          isLargeCard={false}
        />
      </View>
      
      <Text style={CommonStyles.sectionTitle}>Today's Appointments</Text>
      <View style={CommonStyles.cardColumn}>
        <DashboardCard
          number="Abdulrehman Bilal"
          title="Regular Checkup"
          isBlueNumber={true}
          isLargeCard={true}
        />
        <DashboardCard
          number="Hassan Shahzad"
          title="Follow-up"
          isBlueNumber={false}
          isLargeCard={true}
        />
      </View>
      
      <Text style={CommonStyles.sectionTitle}>Recent Patients</Text>
      <View style={CommonStyles.cardColumn}>
        <DashboardCard
          number="Ali Khan"
          title="Consultation"
          isBlueNumber={true}
          isLargeCard={true}
        />
        <DashboardCard
          number="Hadi Bharara"
          title="Follow-up"
          isBlueNumber={false}
          isLargeCard={true}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
 );
}