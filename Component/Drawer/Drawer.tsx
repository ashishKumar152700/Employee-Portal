import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import BottomTabNavigator from '../BottomNav/BottomNav'; 
import CustomDrawerContent from './DrawerContnet'; // Import your custom content

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <Drawer.Navigator 
        initialRouteName='Attendance'
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content
      >
        <Drawer.Screen name="Employee Portal" component={BottomTabNavigator} /> 
      </Drawer.Navigator>
    </SafeAreaView>
  );
}

export default DrawerNavigator;
