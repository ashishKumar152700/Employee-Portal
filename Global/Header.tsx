import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Pressable, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomHeaderProps {
  title: string;
}

const Header: React.FC<CustomHeaderProps> = ({ title }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCloseDropdown = () => {
    setDropdownVisible(false);
  };

  const handleChangePassword = () => {
    console.log('Change Password clicked');
    handleCloseDropdown();
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    handleCloseDropdown();
  };

  // Function to handle clicks outside the dropdown
  const handlePressOutside = () => {
    if (dropdownVisible) {
      handleCloseDropdown();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Ionicons name="menu" size={24} color="white" style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={handleToggleDropdown}>
            <Ionicons name="person-circle-outline" size={30} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>

        {dropdownVisible && (
          <View style={styles.dropdown}>
            <Pressable style={styles.dropdownItem2} onPress={handleChangePassword}>
              <Ionicons name="person-circle-outline" size={20} color="black" style={styles.dropdownIcon} />
              <Text style={styles.dropdownText}>User ID: 10188</Text>
            </Pressable>
            <Pressable style={styles.dropdownItem} onPress={handleChangePassword}>
              <Ionicons name="lock-closed-outline" size={20} color="rgb(0, 41, 87)" style={styles.dropdownIcon} />
              <Text style={styles.dropdownText}>Change Password</Text>
            </Pressable>
            <Pressable style={styles.dropdownItem} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={20} color="rgb(0, 41, 87)" style={styles.dropdownIcon} />
              <Text style={styles.dropdownText}>Logout</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'rgb(0, 41, 87)',
    paddingTop: 30, // Add padding to ensure it sits below the status bar
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    padding: 5,
  },
  dropdown: {
    position: 'absolute',
    right: 15,
    top: 75,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    width: 200,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: 'rgb(0, 41, 87)', // Border color
  },
  dropdownItem: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(220, 220, 220)', // Light border between items
  },

  dropdownItem2: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey', // Light border between items
    
  },

  dropdownText: {
    color: 'rgb(0, 41, 87)',
    fontSize: 16,
    marginLeft: 10, // Space between icon and text
  },
  dropdownIcon: {
    // Optional: add styles for the dropdown icons
  },
});

export default Header;
