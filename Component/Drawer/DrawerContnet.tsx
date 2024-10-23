// CustomDrawerContent.js
import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU' }}
          style={styles.logo}
        />
      </View>

      {/* Main Drawer Items */}
      <DrawerItemList {...props} />

      {/* Submenu */}
      <TouchableOpacity style={styles.submenuButton} onPress={toggleSubmenu}>
        <Text style={styles.submenuButtonText}>Submenu</Text>
      </TouchableOpacity>
      
      {submenuVisible && (
        <View style={styles.submenuContainer}>
          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu Item 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#f8f9fa', // Light background for the drawer
  },
  logoContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', // White background for logo area
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Light gray border at the bottom
  },
  logo: {
    width: 100, // Adjust the size as needed
    height: 100,
    borderRadius: 50, // Circular logo
    resizeMode: 'cover', // Cover for better fit
  },
  submenuButton: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  submenuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submenuContainer: {
    paddingLeft: 20,
    paddingVertical: 10,
  },
  submenuItem: {
    paddingVertical: 10,
  },
  submenuItemText: {
    fontSize: 14,
  },
});

export default CustomDrawerContent;
