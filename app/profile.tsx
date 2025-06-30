import {View, Text, ScrollView, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles, ProfileStyles } from '../types';
import { CustomTextInput, CustomDropdown } from '../components';

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
    <SafeAreaView style={CommonStyles.safeContainer}>
      <View style={CommonStyles.header}>
        <Text style={CommonStyles.headerTitle}>Profile</Text>
      </View>
      
      <ScrollView style={CommonStyles.scrollContainer}>
        <View style={ProfileStyles.profilePhotoSection}>
          <View style={ProfileStyles.profilePhoto}>
            <Text style={ProfileStyles.profilePhotoText}>👤</Text>
          </View>
          <TouchableWithoutFeedback>
            <View style={ProfileStyles.changePhotoIcon}>
              <Text style={ProfileStyles.changePhotoText}>✏️</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text style={ProfileStyles.tapToChangeText}>Tap to change</Text>
        
        <View style={ProfileStyles.formSection}>
          <CustomTextInput
            label="Full Name"
            value="Abdulrehman Bilal"
            placeholder="Enter your full name"
            isAuthInput={false}
          />
          
          <CustomTextInput
            label="Email"
            value="abdulrehmanbilal25@gmail.com"
            placeholder="Enter your email"
            keyboardType="email-address"
            isAuthInput={false}
          />
          
          <CustomTextInput
            label="Phone Number"
            value="03020678584"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            isAuthInput={false}
          />
          
          <CustomTextInput
            label="Date of Birth"
            value="19 July, 2008"
            placeholder="Select your date of birth"
            isAuthInput={false}
          />
          
          <CustomDropdown
            label="Gender"
            data={genderData}
            value={gender}
            onChange={(item) => setGender(item.value)}
            placeholder="Select Gender"
            isAuthDropdown={false}
          />
          
          <CustomTextInput
            label="Address"
            value="Lasani Town, Faisalabad, Pakistan"
            placeholder="Enter your address"
            isAuthInput={false}
            isAddressInput={true}
            multiline={true}
            numberOfLines={3}
          />
          
          <View style={CommonStyles.buttonsSection}>
            <TouchableOpacity style={CommonStyles.saveButton} onPress={() => {}}>
              <Text style={CommonStyles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={CommonStyles.changePasswordButton} onPress={() => {}}>
              <Text style={CommonStyles.buttonText}>Change Password</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={CommonStyles.deleteButton} onPress={() => {}}>
              <Text style={CommonStyles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
