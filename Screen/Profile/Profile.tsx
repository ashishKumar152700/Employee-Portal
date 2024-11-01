import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

// Function to scale sizes based on device width
const scaleSize = (size:any) => (width / 375) * size;

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [currentField, setCurrentField] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const profileData = {
    name: 'John Doe',
    employeeCode: 'EMP001',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    department: 'Engineering',
    reporting: 'Jane Smith',
  };

  const handleEdit = (field:any, value:any) => {
    setCurrentField(field);
    setCurrentValue(value);
    setModalVisible(true);
  };

  const handleSubmit = () => {
    console.log(`${currentField}: ${currentValue}`);
    setModalVisible(false);
  };

  const handleChangePassword = () => {
    console.log(`Old Password: ${oldPassword}, New Password: ${newPassword}`);
    setOldPassword('');
    setNewPassword('');
    setPasswordModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {Object.entries(profileData).map(([key, value]) => (
          <View style={styles.profileInfo} key={key}>
            <View>
              <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
              <Text style={styles.info}>{value}</Text>
            </View>
            <TouchableOpacity onPress={() => handleEdit(key, value)} style={styles.iconButton}>
              <Icon name="edit" size={scaleSize(24)} color="#007bff" />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity onPress={() => setPasswordModalVisible(true)} style={styles.changePasswordButton}>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Edit Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Edit {currentField.charAt(0).toUpperCase() + currentField.slice(1)}</Text>

            <TextInput placeholder={`Enter new ${currentField}`} style={styles.input} value={currentValue} onChangeText={setCurrentValue} />

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
      </Modal>

      {/* Change Password Modal */}
      <Modal animationType="slide" transparent={true} visible={passwordModalVisible} onRequestClose={() => setPasswordModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Change Password</Text>

            <TextInput placeholder="Enter old password" secureTextEntry style={styles.input} value={oldPassword} onChangeText={setOldPassword} />
            <TextInput placeholder="Enter new password" secureTextEntry style={styles.input} value={newPassword} onChangeText={setNewPassword} />

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
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleSize(20),
    backgroundColor: '#f2f3f8',
  },
  header: {
    fontSize: scaleSize(26),
    fontWeight: 'bold',
    color: '#002957',
    marginBottom: scaleSize(20),
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSize(15),
    marginVertical: scaleSize(10),
    borderRadius: scaleSize(10),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: scaleSize(16),
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  info: {
    fontSize: scaleSize(16),
    fontWeight: '500',
    color: '#333',
  },
  iconButton: {
    padding: scaleSize(5),
  },
  changePasswordButton: {
    backgroundColor: 'rgb(0, 41, 87)',
    paddingVertical: scaleSize(12),
    borderRadius: scaleSize(10),
    alignItems: 'center',
    marginTop: scaleSize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6,
  },
  changePasswordText: {
    color: '#fff',
    fontSize: scaleSize(16),
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: scaleSize(10),
    padding: scaleSize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    fontSize: scaleSize(20),
    fontWeight: 'bold',
    marginBottom: scaleSize(15),
    textAlign: 'center',
  },
  input: {
    height: scaleSize(45),
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: scaleSize(8),
    paddingHorizontal: scaleSize(12),
    marginBottom: scaleSize(15),
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: 'rgb(0, 41, 87)',
    padding: scaleSize(12),
    borderRadius: scaleSize(8),
    flex: 1,
    marginRight: scaleSize(5),
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: scaleSize(12),
    borderRadius: scaleSize(8),
    flex: 1,
    marginLeft: scaleSize(5),
  },
  cancelButtonText: {
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default Profile;
