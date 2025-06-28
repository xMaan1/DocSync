import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {useRouter} from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

export default function ProfileScreen() {
  const router = useRouter();
  
  const [gender, setGender] = useState('male');

  const genderData = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
    { label: 'Prefer not to say', value: 'not_specified' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.profilePhotoSection}>
          <View style={styles.profilePhoto}>
            <Text style={styles.profilePhotoText}>👤</Text>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.changePhotoIcon}>
              <Text style={styles.changePhotoText}>✏️</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.tapToChangeText}>Tap to change</Text>
        
        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.textInput}
              value={"Abdulrehman Bilal"}
              placeholder="Enter your full name"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.textInput}
              value={"abdulrehmanbilal25@gmail.com"}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              value={"03020678584"}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.textInput}
              value={"19 July, 2008"}
              placeholder="Select your date of birth"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={genderData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Gender"
              value={gender}
              onChange={item => {
                setGender(item.value);
              }}
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.textInput, styles.addressInput]}
              value={"Lasani Town, Faisalabad, Pakistan"}
              placeholder="Enter your address"
              multiline={true}
              numberOfLines={3}
            />
          </View>
          
          <View style={styles.buttonsSection}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.changePasswordButton}>
              <Text style={styles.changePasswordButtonText}>Change Password</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    height: 120,
    padding: 20,
    backgroundColor: '#FACC15',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profilePhotoSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    position: 'relative',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profilePhotoText: {
    fontSize: 40,
    color: '#333',
  },
  changePhotoIcon: {
    position: 'absolute',
    bottom: 0,
    right: '35%',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePhotoText: {
    fontSize: 16,
    color: 'white',
  },
  tapToChangeText: {
    marginBottom: 20,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  formSection: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  addressInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  buttonsSection: {
    marginTop: 30,
    marginBottom: 40,
  },
  saveButton: {
    backgroundColor: '#10B981',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  changePasswordButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  changePasswordButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 15,
    borderRadius: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
