import { Pressable, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

export const SquareImage = ({ style, size = 120, image, resizeMode, uri }) => {
  return (
    <FastImage
      resizeMode={resizeMode}
      style={[styles.image, { width: size, height: size }, style]}
      source={image ? image.source : { uri: uri}}
    />
  )
};

const ImageLocal = ({ image, style, onPress, color, children, width, height, uri }) => {
  if (!image) {
    return null;
  }
  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <FastImage
          source={image ? image.source : { uri: uri}}
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
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
