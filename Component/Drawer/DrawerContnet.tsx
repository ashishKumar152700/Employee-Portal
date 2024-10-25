import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'; // For the icons

export const CustomDrawerContent = (props: any) => {
  const [submenuVisible, setSubmenuVisible] = useState({
    attendance: false,
  });

  const toggleSubmenu = (menu: string) => {
    setSubmenuVisible((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU',
          }}
          style={styles.logo}
        />
      </View>

      {/* Attendance Menu */}
      <TouchableOpacity
        style={styles.submenuButton}
        onPress={() => toggleSubmenu('attendance')}
      >
        <Text style={styles.submenuButtonText}>Attendance</Text>
        <MaterialIcons
          name={submenuVisible.attendance ? 'expand-less' : 'expand-more'}
          size={24}
          color="black"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      {submenuVisible.attendance && (
        <View style={styles.submenuContainer}>
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => props.navigation.navigate('Punch')}
          >
            <Text style={styles.submenuItemText}>Punch IN/OUT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => props.navigation.navigate('Calander')}
          >
            <Text style={styles.submenuItemText}>Calender</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => props.navigation.navigate('MyDailyAttendance')}
          >
            <Text style={styles.submenuItemText}>My Daily Attendance</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => props.navigation.navigate('MyPunchApplication')}
          >
            <Text style={styles.submenuItemText}>My Punch Application</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#f8f9fa',
  },
  logoContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  submenuButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e0e0e0',
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
  iconStyle: {
    marginRight: 10,
  },
});

export default CustomDrawerContent;


// import React, { useState } from 'react';
// import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { MaterialIcons } from '@expo/vector-icons'; // For the icons

// export const CustomDrawerContent = (props: any) => {
//   const [submenuVisible, setSubmenuVisible] = useState({
//     attendance: false,
//     menu1: false,
//     menu2: false,
//   });

//   const toggleSubmenu = (menu: string) => {
//     setSubmenuVisible((prevState) => ({
//       ...prevState,
//       [menu]: !prevState[menu],
//     }));
//   };

//   return (
//     <DrawerContentScrollView {...props} style={styles.drawerContent}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={{
//             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU',
//           }}
//           style={styles.logo}
//         />
//       </View>

//       {/* Attendance Menu */}
//       <TouchableOpacity
//         style={styles.submenuButton}
//         onPress={() => toggleSubmenu('attendance')}
//       >
//         <Text style={styles.submenuButtonText}>Attendance</Text>
//         <MaterialIcons
//           name={submenuVisible.attendance ? 'expand-less' : 'expand-more'}
//           size={24}
//           color="black"
//           style={styles.iconStyle}
//         />
//       </TouchableOpacity>

//       {submenuVisible.attendance && (
//         <View style={styles.submenuContainer}>
//           <TouchableOpacity style={styles.submenuItem}>
//             <Text style={styles.submenuItemText}>Submenu Attendance 1</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.submenuItem}>
//             <Text style={styles.submenuItemText}>Submenu Attendance 2</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Menu 1 */}
//       <TouchableOpacity
//         style={styles.submenuButton}
//         onPress={() => toggleSubmenu('menu1')}
//       >
//         <Text style={styles.submenuButtonText}>Menu 1</Text>
//         <MaterialIcons
//           name={submenuVisible.menu1 ? 'expand-less' : 'expand-more'}
//           size={24}
//           color="black"
//           style={styles.iconStyle}
//         />
//       </TouchableOpacity>

//       {submenuVisible.menu1 && (
//         <View style={styles.submenuContainer}>
//           <TouchableOpacity style={styles.submenuItem}>
//             <Text style={styles.submenuItemText}>Submenu 1 Item 1</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.submenuItem}>
//             <Text style={styles.submenuItemText}>Submenu 1 Item 2</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Menu 2 */}
//       <TouchableOpacity
//         style={styles.submenuButton}
//         onPress={() => toggleSubmenu('menu2')}
//       >
//         <Text style={styles.submenuButtonText}>Menu 2</Text>
//         <MaterialIcons
//           name={submenuVisible.menu2 ? 'expand-less' : 'expand-more'}
//           size={24}
//           color="black"
//           style={styles.iconStyle}
//         />
//       </TouchableOpacity>

//       {submenuVisible.menu2 && (
//         <View style={styles.submenuContainer}>
//           <TouchableOpacity style={styles.submenuItem}>
//             <Text style={styles.submenuItemText}>Submenu 2 Item 1</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.submenuItem}>
//             <Text style={styles.submenuItemText}>Submenu 2 Item 2</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </DrawerContentScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   drawerContent: {
//     backgroundColor: '#f8f9fa',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#ffffff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     resizeMode: 'cover',
//   },
//   submenuButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#e0e0e0',
//   },
//   submenuButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   submenuContainer: {
//     paddingLeft: 20,
//     paddingVertical: 10,
//   },
//   submenuItem: {
//     paddingVertical: 10,
//   },
//   submenuItemText: {
//     fontSize: 14,
//   },
//   iconStyle: {
//     marginRight: 10,
//   },
// });

// export default CustomDrawerContent;


// // import React, { useState } from 'react';
// // import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// // import { DrawerContentScrollView, DrawerItemList as NativeDrawerItemList } from '@react-navigation/drawer';
// // import Collapsible from 'react-native-collapsible';

// // export const CustomDrawerContent = (props: any) => {
// //   const [submenuVisible, setSubmenuVisible] = useState(true);  // Accordion state
// //   const [submenu2Visible, setSubmenu2Visible] = useState(true); // Another submenu

// //   const toggleSubmenu = () => {
// //     setSubmenuVisible(!submenuVisible);
// //   };

// //   const toggleSubmenu2 = () => {
// //     setSubmenu2Visible(!submenu2Visible);
// //   };

// //   return (
// //     <DrawerContentScrollView {...props} style={styles.drawerContent}>
// //       <View style={styles.logoContainer}>
// //         <Image
// //           source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU' }}
// //           style={styles.logo}
// //         />
// //       </View>

// //       {/* Main Drawer Items */}
// //       <NativeDrawerItemList {...props} />

// //       {/* Submenu 1 */}
// //       <TouchableOpacity style={styles.submenuButton} onPress={toggleSubmenu}>
// //         <Text style={styles.submenuButtonText}>Menu 1</Text>
// //       </TouchableOpacity>
// //       <Collapsible collapsed={submenuVisible}>
// //         <View style={styles.submenuContainer}>
// //           <TouchableOpacity style={styles.submenuItem}>
// //             <Text style={styles.submenuItemText}>Submenu 1 Item 1</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.submenuItem}>
// //             <Text style={styles.submenuItemText}>Submenu 1 Item 2</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </Collapsible>

// //       {/* Submenu 2 */}
// //       <TouchableOpacity style={styles.submenuButton} onPress={toggleSubmenu2}>
// //         <Text style={styles.submenuButtonText}>Menu 2</Text>
// //       </TouchableOpacity>
// //       <Collapsible collapsed={submenu2Visible}>
// //         <View style={styles.submenuContainer}>
// //           <TouchableOpacity style={styles.submenuItem}>
// //             <Text style={styles.submenuItemText}>Submenu 2 Item 1</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.submenuItem}>
// //             <Text style={styles.submenuItemText}>Submenu 2 Item 2</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </Collapsible>
// //     </DrawerContentScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   drawerContent: {
// //     backgroundColor: '#f8f9fa',
// //   },
// //   logoContainer: {
// //     alignItems: 'center',
// //     padding: 20,
// //     backgroundColor: '#ffffff',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e0e0e0',
// //   },
// //   logo: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     resizeMode: 'cover',
// //   },
// //   submenuButton: {
// //     padding: 15,
// //     backgroundColor: '#e0e0e0',
// //     alignItems: 'center',
// //   },
// //   submenuButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   submenuContainer: {
// //     paddingLeft: 20,
// //     paddingVertical: 10,
// //   },
// //   submenuItem: {
// //     paddingVertical: 10,
// //   },
// //   submenuItemText: {
// //     fontSize: 14,
// //   },
// // });

// // export default CustomDrawerContent;


// // // // CustomDrawerContent.js
// // // import React, { useState } from 'react';
// // // import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// // // import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// // //  export const CustomDrawerContent = (props: any) => {
// // //   const [submenuVisible, setSubmenuVisible] = useState(false);

// // //   const toggleSubmenu = () => {
// // //     setSubmenuVisible(!submenuVisible);
// // //   };

// // //   return (
// // //     <DrawerContentScrollView {...props} style={styles.drawerContent}>
// // //       <View style={styles.logoContainer}>
// // //         <Image
// // //           source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU' }}
// // //           style={styles.logo}
// // //         />
// // //       </View>

// // //       {/* Main Drawer Items */}
// // //       <DrawerItemList  {...props} />

// // //       {/* Submenu */}
// // //       <TouchableOpacity style={styles.submenuButton} onPress={toggleSubmenu}>
// // //         <Text style={styles.submenuButtonText}>Submenu</Text>
// // //       </TouchableOpacity>
      
// // //       {submenuVisible && (
// // //         <View style={styles.submenuContainer}>
// // //           <TouchableOpacity style={styles.submenuItem}>
// // //             <Text style={styles.submenuItemText}>Submenu Item 1</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.submenuItem}>
// // //             <Text style={styles.submenuItemText}>Submenu Item 2</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.submenuItem}>
// // //             <Text style={styles.submenuItemText}>Submenu Item 3</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.submenuItem}>
// // //             <Text style={styles.submenuItemText}>Submenu Item 3</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       )}
// // //     </DrawerContentScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   drawerContent: {
// // //     backgroundColor: '#f8f9fa', // Light background for the drawer
// // //   },
// // //   logoContainer: {
// // //     alignItems: 'center',
// // //     padding: 20,
// // //     backgroundColor: '#ffffff', // White background for logo area
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#e0e0e0', // Light gray border at the bottom
// // //   },
// // //   logo: {
// // //     width: 100, // Adjust the size as needed
// // //     height: 100,
// // //     borderRadius: 50, // Circular logo
// // //     resizeMode: 'cover', // Cover for better fit
// // //   },
// // //   submenuButton: {
// // //     padding: 15,
// // //     backgroundColor: '#e0e0e0',
// // //     alignItems: 'center',
// // //   },
// // //   submenuButtonText: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // //   submenuContainer: {
// // //     paddingLeft: 20,
// // //     paddingVertical: 10,
// // //   },
// // //   submenuItem: {
// // //     paddingVertical: 10,
// // //   },
// // //   submenuItemText: {
// // //     fontSize: 14,
// // //   },
// // // });

// // // export default CustomDrawerContent;


// // // // import React, { useState } from 'react';
// // // // import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// // // // import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// // // // import { MaterialIcons } from '@expo/vector-icons'; // Import icons

// // // // const CustomDrawerContent = (props: any) => {
// // // //   const [attendanceVisible, setAttendanceVisible] = useState(false);

// // // //   const toggleAttendance = () => {
// // // //     setAttendanceVisible(!attendanceVisible);
// // // //   };

// // // //   return (
// // // //     <DrawerContentScrollView {...props} style={styles.drawerContent}>
// // // //       <View style={styles.logoContainer}>
// // // //         <Image
// // // //           source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU' }}
// // // //           style={styles.logo}
// // // //         />
// // // //       </View>

// // // //       {/* Main Drawer Items */}
// // // //       <DrawerItemList {...props} />

// // // //       {/* Attendance Accordion */}
// // // //       <TouchableOpacity style={styles.submenuButton} onPress={toggleAttendance}>
// // // //         <Text style={styles.submenuButtonText}>Attendance</Text>
// // // //         <MaterialIcons
// // // //           name={attendanceVisible ? 'expand-less' : 'expand-more'}
// // // //           size={24}
// // // //           color="black"
// // // //         />
// // // //       </TouchableOpacity>

// // // //       {attendanceVisible && (
// // // //         <View style={styles.submenuContainer}>
// // // //           <TouchableOpacity style={styles.submenuItem}>
// // // //             <Text style={styles.submenuItemText}>Mark Attendance</Text>
// // // //           </TouchableOpacity>
// // // //           <TouchableOpacity style={styles.submenuItem}>
// // // //             <Text style={styles.submenuItemText}>View Attendance</Text>
// // // //           </TouchableOpacity>
// // // //           <TouchableOpacity style={styles.submenuItem}>
// // // //             <Text style={styles.submenuItemText}>Attendance Report</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       )}
// // // //     </DrawerContentScrollView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   drawerContent: {
// // // //     backgroundColor: '#f8f9fa', // Light background for the drawer
// // // //   },
// // // //   logoContainer: {
// // // //     alignItems: 'center',
// // // //     padding: 20,
// // // //     backgroundColor: '#ffffff', // White background for logo area
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#e0e0e0', // Light gray border at the bottom
// // // //   },
// // // //   logo: {
// // // //     width: 100, // Adjust the size as needed
// // // //     height: 100,
// // // //     borderRadius: 50, // Circular logo
// // // //     resizeMode: 'cover', // Cover for better fit
// // // //   },
// // // //   submenuButton: {
// // // //     flexDirection: 'row', // Horizontal layout for text and icon
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     padding: 15,
// // // //     backgroundColor: '#e0e0e0',
// // // //   },
// // // //   submenuButtonText: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   submenuContainer: {
// // // //     paddingLeft: 20,
// // // //     paddingVertical: 10,
// // // //   },
// // // //   submenuItem: {
// // // //     paddingVertical: 10,
// // // //   },
// // // //   submenuItemText: {
// // // //     fontSize: 14,
// // // //   },
// // // // });

// // // // export default CustomDrawerContent;
