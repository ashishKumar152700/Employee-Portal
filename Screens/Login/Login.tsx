import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFPercentage } from 'react-native-responsive-fontsize'; // Responsive Font Scaling
import { baseUrl } from '../../Global/Config';
import { RootStackParamList } from '../../Global/Types'; 
import { StackNavigationProp } from '@react-navigation/stack';


const { width, height } = Dimensions.get('window'); 

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginScreen = () => {
  const [employeecode, setemployeecode] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
        navigation.navigate('RKT Portal');

    // // Input validation to check if username and password are provided
    // if (!employeecode.trim() || !password.trim()) {
    //   Alert.alert('Validation Failed', 'Please enter both username and password.');
    //   return; // Exit the function if validation fails
    // }
  
    // try {
    //   console.log(employeecode);
    //   console.log(password);
  
    //   // Proceed with the login request
    //   const response = await axios.post(`${baseUrl}/api/v1/auth/login`, {
    //     employeecode: +employeecode,
    //     password: password,
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
  
    //   console.log(response);
  
    //   if (response.data.status === 200) {
    //     await AsyncStorage.setItem('accessToken', response.data.data.accessToken);
    //     console.log('Access Token:', response.data.data.accessToken);
    //     navigation.navigate('RKT Portal');
    //   } else {
    //     Alert.alert('Login Failed', response.data.message);
    //   }
    // } catch (error) {
    //   console.error('Login Error:', error);
    //   Alert.alert('Login Failed', 'Please check your credentials and try again.');
    // }
  };
  

  return (
    <LinearGradient colors={['rgb(0, 41, 87)', 'white']} style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU' }}
              style={styles.logo}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.welcomeText}>Welcome To</Text>
              <Text style={styles.portalText}>Employee Self Service Portal</Text>
            </View>

            <TextInput
              label="EmployeeCode"
              value={employeecode}
              onChangeText={setemployeecode}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="rgb(0, 41, 87)"
              outlineColor="rgb(0, 41, 87)"
              theme={{ colors: { background: 'white' } }}
            />
            
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              mode="outlined"
              activeOutlineColor="rgb(0, 41, 87)"
              outlineColor="rgb(0, 41, 87)"
              theme={{ colors: { background: 'white' } }}
            />
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Added Forgot Password and Other Options */}
            <View style={styles.footerContainer}>
              <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
                <Text style={styles.footerLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Your Company. All Rights Reserved.</Text>
        </View> */}
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 60 : 20,
  },
  card: {
    width: '90%', // Set width in percentage to adapt to various screen sizes
    paddingVertical: height * 0.025, // Dynamic vertical padding based on screen height (2.5%)
    paddingHorizontal: width * 0.05, // Dynamic horizontal padding based on screen width (5%)
    borderRadius: 12,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 40,
  },
  
  logo: {
    width: width * 0.4, // Scaled width for responsiveness
    height: width * 0.4,
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: RFPercentage(3), // Responsive font size
    fontWeight: 'bold',
    color: 'rgb(0, 41, 87)',
  },
  portalText: {
    fontSize: RFPercentage(2.5), // Responsive font size
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'rgb(0, 41, 87)',
    width: '100%',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: RFPercentage(2.2), // Responsive font size
    fontWeight: '600',
  },
  footerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerLink: {
    color: 'rgb(0, 41, 87)',
    fontSize: RFPercentage(2), // Responsive font size
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: RFPercentage(2), // Responsive font size
    color: '#777',
  },
});

export default LoginScreen;
