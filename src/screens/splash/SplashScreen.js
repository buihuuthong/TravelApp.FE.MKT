import ImageLocal from '@base-components/ImageLocal';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import IMAGE from '@constants/image';
import { useFocusEffect } from '@react-navigation/native';
import { isLogin } from '@utils/method';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

const SplashScreen = ({ navigation }) => {


  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        if (isLogin()) {
          navigation.navigate('MainTab')
        } else {
          navigation.navigate('LoginScreen')
        }
      }, 500)
    }, [])
  );

  return (
    <View style={styles.container}>
      <ImageLocal image={IMAGE.logo} />
      <Text
        style={styles.name}
        fontSize={FONT_SIZE.logo}
        color={COLOR.lightBlue}
        semibold
      >My Travel</Text>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
