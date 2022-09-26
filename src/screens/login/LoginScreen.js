import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import ImageLocal from '@base-components/ImageLocal';
import IMAGE from '@constants/image';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import { PrimaryButton } from '@base-components/Buttons';

const LoginScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageLocal image={IMAGE.logo} />
      <Text
        fontSize={FONT_SIZE.h2}
        color={COLOR.text}
        semibold
        center
      >Bắt đầu tìm kiếm một địa {`\n`} điểm hoàn hảo cho kì {`\n`} nghỉ của bạn!</Text>
      <Text
        fontSize={FONT_SIZE.default}
        color={COLOR.text}
        center
      >Ứng dụng cho phép bạn xem và đặt những tour {`\n`}
        du lịch trong nước một cách thuận lợi {`\n`} và nhanh chóng.
      </Text>
      <PrimaryButton
        text='Đăng nhập'
        style={{ top: 10, shadowColor: '#0192FA'}}
        bgColor={COLOR.lightBlue}
      />
      <PrimaryButton
        text='Đăng kí'
        color={COLOR.text}
        style={{ top: 20, shadowColor: '#BDBDBD'}}
        bgColor={COLOR.whiteBlue}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
  }
})
