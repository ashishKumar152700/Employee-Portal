// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleProp, TextStyle } from 'react-native';
import { ComponentProps } from 'react'; // Import ComponentProps from 'react'

type TabBarIconProps = {
  name: ComponentProps<typeof Ionicons>['name']; // Icon name based on Ionicons
  color: string;  // Color of the icon
  style?: StyleProp<TextStyle>; // Optional style for the icon
   size: number 
};

export function TabBarIcon({ name, color, style }: TabBarIconProps) {
  return <Ionicons name={name} size={24} color={color}  style={[{ marginBottom: -3 }, style]} />;
}
