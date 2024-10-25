import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const MyLeaveScreen = () => {
  // Sample chart data
  const chartData = [
    { name: 'Used Leave', population: 15, color: '#A27CF3', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Total Leave', population: 7, color: '#e3e3e3', legendFontColor: '#7F7F7F', legendFontSize: 12 }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Leave</Text>
      </View>

      {/* Leave Balance Pie Chart */}
      <View style={styles.leaveBalanceContainer}>
        <PieChart
          data={chartData}
          width={screenWidth * 0.8}
          height={150}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        <Text style={styles.leaveBalanceText}>07</Text>
        <Text style={styles.leaveBalanceLabel}>Leave Balance</Text>
      </View>

      {/* Leave Types */}
      <View style={styles.leaveTypesContainer}>
        <View style={styles.leaveType}>
          <View style={[styles.iconCircle, { backgroundColor: '#F6D43A' }]}>
            <Text style={styles.leaveCount}>2</Text>
          </View>
          <Text>Medical Leave</Text>
        </View>
        <View style={styles.leaveType}>
          <View style={[styles.iconCircle, { backgroundColor: '#4FBDFD' }]}>
            <Text style={styles.leaveCount}>4</Text>
          </View>
          <Text>Casual Leave</Text>
        </View>
        <View style={styles.leaveType}>
          <View style={[styles.iconCircle, { backgroundColor: '#1EB0A8' }]}>
            <Text style={styles.leaveCount}>1</Text>
          </View>
          <Text>Sick Leave</Text>
        </View>
      </View>

      {/* Approvals and Leave History Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabTextActive}>Approvals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Leave History</Text>
        </TouchableOpacity>
      </View>

      {/* Leave Request List */}
      <ScrollView style={styles.leaveRequestsContainer}>
        <View style={styles.leaveRequest}>
          <View style={styles.requestDot} />
          <View>
            <Text style={styles.leaveRequestType}>Casual Leave</Text>
            <Text>Applied from 26th Mar to 28th Mar, 2024</Text>
          </View>
          <Text style={styles.statusRequested}>Requested</Text>
        </View>
        <View style={styles.leaveRequest}>
          <View style={[styles.requestDot, { backgroundColor: '#F6D43A' }]} />
          <View>
            <Text style={styles.leaveRequestType}>Medical Leave</Text>
            <Text>Applied from 11th Mar to 12th Mar, 2024</Text>
          </View>
          <Text style={styles.statusApproved}>Approved</Text>
        </View>
      </ScrollView>

      {/* Apply for Leave Button */}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Click to apply for leave</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Placeholder */}
      <View style={styles.bottomNavigation}>
        {/* Add your bottom navigation icons here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  leaveBalanceContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  leaveBalanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 55,
  },
  leaveBalanceLabel: {
    marginTop: 10,
    fontSize: 16,
    color: '#7F7F7F',
  },
  leaveTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  leaveType: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  leaveCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    color: '#7F7F7F',
  },
  tabTextActive: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  leaveRequestsContainer: {
    paddingHorizontal: 20,
  },
  leaveRequest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  requestDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4FBDFD',
    marginRight: 10,
  },
  leaveRequestType: {
    fontWeight: 'bold',
  },
  statusRequested: {
    color: '#7F7F7F',
  },
  statusApproved: {
    color: '#1EB0A8',
  },
  applyButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default MyLeaveScreen;
