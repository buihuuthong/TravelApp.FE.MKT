import FONT_SIZE from '@constants/fontSize';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLOR from '../constants/color';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export const PrimaryButton = ({
  text = '',
  onPress,
  disabled = false,
  style,
  border = false,
  colors = [COLOR.lightPink, COLOR.pink],
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={[styles.container, { borderRadius: border ? 8 : 15 }, style]}
      >
        <Text fontSize={FONT_SIZE.md} semibold color={COLOR.white}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};