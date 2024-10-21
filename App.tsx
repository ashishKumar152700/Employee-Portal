  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import LoginScreen from './Screens/Login/Login';
  import PunchScreen from './Screens/PunchModule/PunchScreen';
  import { StatusBar } from 'expo-status-bar';
  import { Dimensions, PixelRatio, useWindowDimensions } from 'react-native';
  import BottomNav from './Component/BottomNav/BottomTab';
  import Header from './Global/Header'; // Import the Custom Header

  const Stack = createStackNavigator();

  const normalizeFontSize = (size: any, fontScale: any) => {
    return Math.round(size * fontScale); 
  };

  export default function App() {


    return (
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="black" />
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen 
            name="LoginScreen" 
            options={{ headerShown: false }} 
            component={LoginScreen} 
          />
          <Stack.Screen 
            name="RKT Portal" 
            component={BottomNav} 
            options={{
              headerShown:true
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
