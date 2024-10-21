import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, PixelRatio } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PunchScreen from '../../Screens/PunchModule/PunchScreen';
import Profile from '../../Screens/Profile/Profile';
import Calendar from '../../Screens/Calendar/Calendar';
import { TabBarIcon } from '../../Global/TabBarIcon'; 
import { Colors } from '../../Global/Colors';

// Create Bottom Tab
const Tab = createBottomTabNavigator();

// Get device dimensions
const { width, height } = Dimensions.get('window');

// Function to calculate font size based on screen size and pixel density
const scaleFont = (size: number) => {
  const scaleFactor = Math.min(width / 375, height / 667); // Adjust for both width and height
  return size * scaleFactor * PixelRatio.getFontScale();
};

// Function to calculate icon size based on screen width
const getIconSize = () => {
  if (width < 360) {
    return width * 0.06; // Smaller screens
  } else if (width >= 360 && width < 768) {
    return width * 0.07; // Medium screens
  } else {
    return width * 0.08; // Larger screens like tablets
  }
};

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint, // Set color based on theme
        tabBarStyle: {
          paddingVertical: width < 360 ? 8 : 12, // Adjust padding based on screen size
          height: width < 360 ? 55 : 65, // Adjust height based on screen size
        },
        tabBarIconStyle: {
          paddingBottom: 2, // Add padding at the bottom of the icons
        },
        tabBarLabelStyle: {
          paddingBottom: 5, // Adjust the label padding for better spacing
          fontSize: scaleFont(10), // Dynamically scale the font size based on screen density and size
        },
        tabBarInactiveTintColor: 'gray', // Color when the tab is inactive
        headerShown: false, // Hide headers on tab screens
      }}>
      <Tab.Screen
        name="Punch IN/OUT"
        component={PunchScreen}
        options={{
          title: 'Punch IN/OUT',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} size={getIconSize()} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} size={getIconSize()} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} size={getIconSize()} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
