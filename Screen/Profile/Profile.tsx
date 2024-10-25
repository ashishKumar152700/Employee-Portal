import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Material Icons

const { width, height } = Dimensions.get('window'); // Get device dimensions

// Function to scale sizes
const scaleSize = (size: any) => (width / 375) * size; // Based on standard width (375 for iPhone 11)

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false); // State for showing/hiding the modal
  const [passwordModalVisible, setPasswordModalVisible] = useState(false); // State for change password modal
  const [currentField, setCurrentField] = useState(''); // Field currently being edited
  const [currentValue, setCurrentValue] = useState(''); // Current value of the field
  const [oldPassword, setOldPassword] = useState(''); // Old password
  const [newPassword, setNewPassword] = useState(''); // New password

  const profileData = {
    name: 'John Doe',
    employeeCode: 'EMP001',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    department: 'Engineering',
    reporting: 'Jane Smith',
  };

  const handleEdit = (field: any, value: any) => {
    setCurrentField(field);
    setCurrentValue(value);
    setModalVisible(true);
  };

  const handleSubmit = () => {
    // Handle the logic to update the specific field here
    console.log(`${currentField}: ${currentValue}`);
    setModalVisible(false);
  };

  const handleChangePassword = () => {
    // Handle the logic to change the password here
    console.log(`Old Password: ${oldPassword}, New Password: ${newPassword}`);
    setOldPassword('');
    setNewPassword('');
    setPasswordModalVisible(false);
  };

  // Function to dismiss the keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardDismissMode="on-drag">
        {/* Profile Information */}
        {Object.entries(profileData).map(([key, value]) => (
          <View style={styles.profileInfo} key={key}>
            <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
            <Text style={styles.info}>{value}</Text>
            <TouchableOpacity
              onPress={() => handleEdit(key, value)} // Open modal for editing
              style={styles.iconButton}
              accessible={true}
              accessibilityLabel={`Edit ${key}`}
            >
              <Icon name="edit" size={scaleSize(24)} color="#007bff" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Change Password Button */}
        <TouchableOpacity onPress={() => setPasswordModalVisible(true)} style={styles.changePasswordButton}>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for editing profile information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Edit {currentField.charAt(0).toUpperCase() + currentField.slice(1)}</Text>

              <TextInput
                placeholder={`Enter new ${currentField}`}
                style={styles.input}
                value={currentValue}
                onChangeText={setCurrentValue}
                autoFocus
                accessibilityLabel={`Input new ${currentField}`}
              />

              <View style={styles.modalActions}>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal for changing password */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={passwordModalVisible}
        onRequestClose={() => setPasswordModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Change Password</Text>

              <TextInput
                placeholder="Enter old password"
                secureTextEntry
                style={styles.input}
                value={oldPassword}
                onChangeText={setOldPassword}
                accessibilityLabel="Input old password"
              />
              <TextInput
                placeholder="Enter new password"
                secureTextEntry
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                accessibilityLabel="Input new password"
              />

              <View style={styles.modalActions}>
                <TouchableOpacity onPress={handleChangePassword} style={styles.submitButton}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPasswordModalVisible(false)} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleSize(20),
    backgroundColor: '#f8f9fa', // Light background color
  },
  header: {
    fontSize: scaleSize(24), // Increased size for better readability
    fontWeight: 'bold',
    color: '#333', // Dark text color for contrast
    marginBottom: scaleSize(10),
    marginTop:scaleSize(5),
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1, // Ensure content is scrollable
    paddingBottom: scaleSize(20), // Padding for bottom content
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically centered
    padding: scaleSize(15),
    marginVertical: scaleSize(8),
    borderRadius: scaleSize(5),
    backgroundColor: '#ffffff', // White background for each info block
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: scaleSize(2),
    elevation: 1, // For Android shadow
  },
  label: {
    fontSize: scaleSize(16),
    fontWeight: '600',
    color: '#555', // Medium grey for labels
  },
  info: {
    fontSize: scaleSize(16),
    color: '#333', // Dark text for info
  },
  iconButton: {
    padding: scaleSize(5),
  },
  changePasswordButton: {
    backgroundColor: 'rgb(0, 41, 87)', // Button color
    padding: scaleSize(10),
    borderRadius: scaleSize(5),
    alignItems: 'center',
    marginTop: scaleSize(20),
  },
  changePasswordText: {
    color: '#fff',
    fontSize: scaleSize(16),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
  },
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: scaleSize(10),
    padding: scaleSize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: scaleSize(4),
    elevation: 5,
  },
  modalHeader: {
    fontSize: scaleSize(20),
    fontWeight: 'bold',
    marginBottom: scaleSize(20),
    textAlign: 'center',
  },
  input: {
    height: scaleSize(40),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: scaleSize(5),
    paddingHorizontal: scaleSize(10),
    marginBottom: scaleSize(15),
  },
  modalActions: {
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-between',
    width: '100%', // Full width
  },
  submitButton: {
    backgroundColor: 'rgb(0, 41, 87)', // Submit button color
    padding: scaleSize(10),
    borderRadius: scaleSize(5),
    flex: 1, // Grow to take available space
    marginRight: scaleSize(5), // Space between buttons
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc', // Cancel button color
    padding: scaleSize(10),
    borderRadius: scaleSize(5),
    flex: 1, // Grow to take available space
    marginLeft: scaleSize(5), // Space between buttons
  },
  cancelButtonText: {
    textAlign: 'center',
  },
});

export default Profile;
