import React from "react-native";
import { Platform, StatusBar } from "react-native";
import Dimensions from 'Dimensions';
import { Header } from 'react-navigation';

// Precalculate Device Dimensions for better performance
const { width, height } = Dimensions.get('window');
// We add an em() shortcut function
function em(value) {
  return unit * value;
}

// Use iPhone8Plus as base size which is 414 x 736
const baseWidth = 414;
const baseHeight = 736;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

// Then we set our styles with the help of the em() function
export default Style = {
  // GENERAL
  STATUS_BAR_HEIGHT: StatusBar.currentHeight,
  NAVIGATION_BAR_HEIGHT: Header.HEIGHT,
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  IS_IOS: Platform.OS === 'ios',
  // FONT
  FONT_SIZE: (size) => Math.ceil((size * scale)),
};
