import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import BottomTabNavigator from '../BottomNav/BottomNav'; 
import CustomDrawerContent from './DrawerContnet'; // Import your custom content
import BottomTabNavLM from '../BottomNav/BottomNavForLM';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <View style={{ flex: 1 }}> 
      <Drawer.Navigator 
        initialRouteName='Attendance'
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen  name="Attendance" component={BottomTabNavigator} /> 
        <Drawer.Screen  name="LeaveManagement" component={BottomTabNavLM} /> 
      </Drawer.Navigator>
    </View>
  );
}

export default DrawerNavigator;
