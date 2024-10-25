import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PunchScreen from '../../Screen/Attendance/Punch';
import Profile from '../../Screen/Profile/Profile'; 
import Schedule from '../../Screen/Calander/Calander';
import Icon from 'react-native-vector-icons/FontAwesome';
import LeaveManagement from '../../Screen/LeaveManagement/LeaveManagement'
const Tab = createBottomTabNavigator();

function BottomTabNavLM() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="LeaveManagement" 
        component={LeaveManagement} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="pencil" color={color} size={25} /> 
          ),
        }}
      />
      <Tab.Screen 
        name="Calender" 
        component={Schedule} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={25} /> 
          ),
        }} 
      />
     
    </Tab.Navigator>
  );
}

export default BottomTabNavLM;