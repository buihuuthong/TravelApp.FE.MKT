import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const deviceWidth = width;

export const deviceHeight = height - StatusBar.currentHeight;

export const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : undefined;
