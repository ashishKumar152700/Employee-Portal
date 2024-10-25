import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import BottomTabNavigator from '../BottomNav/BottomNav'; 
import CustomDrawerContent from './DrawerContnet'; // Import your custom content
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <View style={{ flex: 1 }}> 
      <Drawer.Navigator 
        initialRouteName='Attendance'
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content
      >
        <Drawer.Screen name="Attendance" options={{headerShown:true}} component={BottomTabNavigator}  /> 
      </Drawer.Navigator>
    </View>
  );
}

export default DrawerNavigator;
