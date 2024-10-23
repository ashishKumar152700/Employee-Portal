import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PunchScreen from '../../Screen/Attendance/Punch';
import Profile from '../../Screen/Profile/Profile'; 
import Schedule from '../../Screen/Calander/Calander';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Punch" 
        component={PunchScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="pencil" color={color} size={25} /> 
          ),
        }}
      />
      <Tab.Screen 
        name="Calander" 
        component={Schedule} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={25} /> 
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={25} /> 
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
