import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert, Dimensions, Platform, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFPercentage } from 'react-native-responsive-fontsize'; 
import { RootStackParamList } from '../../Global/types'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { loginservice } from '../../Services/Login/Login.service';

const { width, height } = Dimensions.get('window'); 

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginScreen = () => {
  const [employeecode, setemployeecode] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    if (!employeecode || !password) {
      Alert.alert('Error', 'Employee code and password are required');
      return;
    }

    setLoading(true); // Start loader

    let postData = {
      employeecode: +employeecode,
      password,
    };

    try {
      const response = await loginservice.LoginApi(postData);
      console.log(response);

      if (response.status === 200) {
        await AsyncStorage.setItem('token', response.data.accessToken);
        navigation.navigate('Main');
      } else {
        Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      Alert.alert('Login Error', 'Something went wrong. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false); // Stop loader
    }
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

            {/* Show loader while logging in */}
            {loading ? (
              <ActivityIndicator size="large" color="rgb(0, 41, 87)" style={{ marginVertical: 20 }} />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            )}

            {/* Forgot Password and Other Options */}
            <View style={styles.footerContainer}>
              <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
                <Text style={styles.footerLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    width: '90%',
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.05,
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
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    color: 'rgb(0, 41, 87)',
  },
  portalText: {
    fontSize: RFPercentage(2.5),
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
    fontSize: RFPercentage(2.2),
    fontWeight: '600',
  },
  footerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerLink: {
    color: 'rgb(0, 41, 87)',
    fontSize: RFPercentage(2),
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
