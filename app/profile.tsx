import {View, Text, ScrollView, TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native';
import {useRouter} from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles, ProfileStyles } from '../types';

export default function ProfileScreen() {
  const router = useRouter();
  
  const [gender, setGender] = useState('male');

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
          <View>
            <Text style={CommonStyles.label}>Full Name</Text>
            <TextInput
              style={CommonStyles.textInput}
              value="Abdulrehman Bilal"
              placeholder="Enter your full name"
            />
          </View>
          
          <View>
            <Text style={CommonStyles.label}>Email</Text>
            <TextInput
              style={CommonStyles.textInput}
              value="abdulrehmanbilal25@gmail.com"
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          
          <View>
            <Text style={CommonStyles.label}>Phone Number</Text>
            <TextInput
              style={CommonStyles.textInput}
              value="03020678584"
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>
          
          <View>
            <Text style={CommonStyles.label}>Date of Birth</Text>
            <TextInput
              style={CommonStyles.textInput}
              value="19 July, 2008"
              placeholder="Select your date of birth"
            />
          </View>
          
          <View>
            <Text style={CommonStyles.label}>Gender</Text>
            <TouchableOpacity 
              style={[CommonStyles.textInput, {justifyContent: 'center'}]}
              onPress={() => {
                if (gender === 'male') setGender('female');
                else if (gender === 'female') setGender('other');
                else if (gender === 'other') setGender('not_specified');
                else setGender('male');
              }}
            >
              <Text style={{color: '#000'}}>
                {gender === 'male' ? 'Male' : 
                 gender === 'female' ? 'Female' : 
                 gender === 'other' ? 'Other' : 'Prefer not to say'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <View>
            <Text style={CommonStyles.label}>Address</Text>
            <TextInput
              style={[CommonStyles.textInput, CommonStyles.addressInput]}
              value="Lasani Town, Faisalabad, Pakistan"
              placeholder="Enter your address"
              multiline={true}
              numberOfLines={3}
            />
          </View>
          
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
