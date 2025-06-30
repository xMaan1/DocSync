import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CommonStyles, DashboardStyles } from '../types';

export default function DashboardHeader({ 
  greeting, 
  userName, 
  userType, 
  onProfilePress 
}: { 
  greeting: string; 
  userName: string; 
  userType: 'doctor' | 'patient'; 
  onProfilePress: () => void; 
}) {
  const headerStyle = [
    DashboardStyles.section1,
    userType === 'doctor' ? DashboardStyles.doctorHeader : DashboardStyles.patientHeader
  ];

  return (
    <View style={headerStyle}>
      <View style={CommonStyles.textContainer}>
        <Text style={DashboardStyles.dashboardHeaderTitle}>{greeting}</Text>
        <Text style={DashboardStyles.dashboardHeaderSubtitle}>{userName}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onProfilePress}>
        <View style={CommonStyles.profileIcon}>
          <Text style={CommonStyles.profileText}>👤</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}