import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useRouter} from 'expo-router';

export default function PatientDashboard() {
  const router = useRouter();

 return (
  <ScrollView style={styles.mainContainer}>
    <View style={styles.section1}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>Good Morning</Text>
        <Text style={styles.headerSubtitle}>Dr. Smith</Text>
      </View>
      <View style={styles.profileIcon}>
        <Text style={styles.profileText}>👤</Text>
      </View>
    </View>
    
    <View style={styles.cardRow}>
      <View style={styles.card}>
        <Text style={styles.cardNumber1}>12</Text>
        <Text style={styles.cardTitle}>Today's Appointments</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardNumber2}>48</Text>
        <Text style={styles.cardTitle}>Total Patients</Text>
      </View>
    </View>
    
    <Text style={styles.section2}>Today's Appointments</Text>
    <View style={styles.cardColumn}>
      <View style={styles.card2}>
        <Text style={styles.cardNumber1}>Abdulrehman Bilal</Text>
        <Text style={styles.cardTitle}>Regular Checkup</Text>
      </View>
      <View style={styles.card2}>
        <Text style={styles.cardNumber2}>Hassan Shahzad</Text>
        <Text style={styles.cardTitle}>Follow-up</Text>
      </View>
    </View>
    
    <Text style={styles.section2}>Recent Patients</Text>
    <View style={styles.cardColumn}>
      <View style={styles.card2}>
        <Text style={styles.cardNumber1}>Ali Khan</Text>
        <Text style={styles.cardTitle}>Consultation</Text>
      </View>
      <View style={styles.card2}>
        <Text style={styles.cardNumber2}>Hadi Bharara</Text>
        <Text style={styles.cardTitle}>Follow-up</Text>
      </View>
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  section1: {
    height: 120,
    padding: 20,
    backgroundColor: '#FACC15',
    flexDirection: 'row',
    marginTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    color: '#333',
  },
  cardRow: {
    flexDirection: 'row',
    margin: 20,
    gap: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '48%',
  },
  cardNumber1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
    cardNumber2: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
    },
  cardTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
    section2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 20,
        marginTop: 20,
    },
    cardColumn: {
        flexDirection: 'column',
        marginLeft: 20,
    },
    card2: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '95%',
    marginTop: 20,
  },
});