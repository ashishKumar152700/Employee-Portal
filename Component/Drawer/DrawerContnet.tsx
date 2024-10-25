import React, { useState } from "react";

import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { MaterialIcons } from "@expo/vector-icons"; // For the icons

export const CustomDrawerContent = (props: any) => {
  const [submenuVisible, setSubmenuVisible] = useState({
    attendance: false,

    menu1: false,

    menu2: false,
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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGAgOHc7MixFJidTH-Ng1Z_y-iq_w82rGIt93WsTFMRTsmwZtuCgTgAh1KE5uDMzOjPk&usqp=CAU",
          }}
          style={styles.logo}
        />
      </View>

      {/* Attendance Menu */}

      <TouchableOpacity
        style={styles.submenuButton}
        onPress={() => toggleSubmenu("attendance")}
      >
        <Text style={styles.submenuButtonText}>Attendance</Text>

        <MaterialIcons
          name={submenuVisible.attendance ? "expand-less" : "expand-more"}
          size={24}
          color="black"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      {submenuVisible.attendance && (
        <View style={styles.submenuContainer}>
          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu Attendance 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu Attendance 2</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Menu 1 */}

      <TouchableOpacity
        style={styles.submenuButton}
        onPress={() => toggleSubmenu("menu1")}
      >
        <Text style={styles.submenuButtonText}>Menu 1</Text>

        <MaterialIcons
          name={submenuVisible.menu1 ? "expand-less" : "expand-more"}
          size={24}
          color="black"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      {submenuVisible.menu1 && (
        <View style={styles.submenuContainer}>
          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu 1 Item 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu 1 Item 2</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Menu 2 */}

      <TouchableOpacity
        style={styles.submenuButton}
        onPress={() => toggleSubmenu("menu2")}
      >
        <Text style={styles.submenuButtonText}>Menu 2</Text>

        <MaterialIcons
          name={submenuVisible.menu2 ? "expand-less" : "expand-more"}
          size={24}
          color="black"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      {submenuVisible.menu2 && (
        <View style={styles.submenuContainer}>
          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu 2 Item 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submenuItem}>
            <Text style={styles.submenuItemText}>Submenu 2 Item 2</Text>
          </TouchableOpacity>
        </View>
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "#f8f9fa",
  },

  logoContainer: {
    alignItems: "center",

    padding: 20,

    backgroundColor: "#ffffff",

    borderBottomWidth: 1,

    borderBottomColor: "#e0e0e0",
  },

  logo: {
    width: 100,

    height: 100,

    borderRadius: 50,

    resizeMode: "cover",
  },

  submenuButton: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    padding: 15,

    backgroundColor: "#e0e0e0",
  },

  submenuButtonText: {
    fontSize: 16,

    fontWeight: "bold",
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
