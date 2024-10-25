import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from '../BottomNav/BottomNav'; 
import CustomDrawerContent from './DrawerContnet'; 
import { View } from 'react-native';
import BottomTabNavLeave from '../BottomNav/BottomNavForLeave';
import MyLeaveScreen from '../../Screen/MyLeave/MyLeaveScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <View style={{ flex: 1 }}> 
      <Drawer.Navigator 
        initialRouteName='Attendance'
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen  name="Attendance" component={BottomTabNavigator} /> 
        {/* <Drawer.Screen  name="MyLeave" component={BottomTabNavLeave} />  */}
        <Drawer.Screen  name="MyLeave" component={MyLeaveScreen} /> 
      </Drawer.Navigator>
    </View>
  );
}

export default DrawerNavigator;
