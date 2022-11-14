import { PrimaryButton } from '@base-components/Buttons';
import ImageLocal from '@base-components/ImageLocal';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import IMAGE from '@constants/image';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

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
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text='Đăng nhập'
          style={{ shadowColor: '#0192FA' }}
          bgColor={COLOR.lightBlue}
          onPress={() => navigate('SignInScreen')}
        />
        <PrimaryButton
          text='Đăng kí'
          color={COLOR.text}
          style={{ shadowColor: '#BDBDBD' }}
          bgColor={COLOR.whiteBlue}
          onPress={() => navigate('SignUpScreen')}
        />
        <TouchableOpacity onPress={() => navigate('MainTabScreen')}>
          <Text fontSize={FONT_SIZE.default}>Bỏ qua và tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    height: '28%'
  }
})
