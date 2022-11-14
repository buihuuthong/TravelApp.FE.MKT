import FONT_SIZE from '@constants/fontSize';
import { StyleSheet, TouchableOpacity } from 'react-native';
import COLOR from '../constants/color';
import ImageLocal from './ImageLocal';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
});

export const PrimaryButton = ({
  text = '',
  onPress,
  disabled = false,
  style,
  border = false,
  bgColor,
  color,
  center,
  display
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[style, styles.container, {
        backgroundColor: bgColor,
        borderRadius: border ? 8 : 15,
        width: 330,
        height: 55,
        borderWidth: 1,
        borderColor: COLOR.white,
        alignSelf: center ? 'center': null ,
        display: display ? 'none' : null
      }]}
    >
      <Text fontSize={FONT_SIZE.md} semibold color={color ? color : COLOR.white }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const SocialButton = ({
  image,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageLocal image={image}/>
    </TouchableOpacity>
  )
}