import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

export const SquareImage = ({ style, size = 120 }) => {
  return
    <FastImage
      style={[styles.image, { width: size, height: size }, style]}
      source={{
        uri: uri ?? SAMPLE_URI,
      }}
    />
};

const ImageLocal = ({ image, style, onPress, color, children, width, height }) => {
  if (!image) {
    return null;
  }
  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <FastImage
          source={image.source}
          tintColor={image.color || color}
          resizeMode={image.resizeMode ?? 'contain'}
          style={[{ width: image.width || width, height: image.height || height }, style]}
        >
          {children}
        </FastImage>
      </Pressable>
    );
  }
  return (
    <FastImage
      pointerEvents={'none'}
      source={image.source}
      tintColor={image.color || color}
      resizeMode={image.resizeMode ?? 'contain'}
      style={[{ width: width || image.width, height: height || image.height }, style]}
    >
      {children}
    </FastImage>
  );
};

export default ImageLocal;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 10,
  },
});
