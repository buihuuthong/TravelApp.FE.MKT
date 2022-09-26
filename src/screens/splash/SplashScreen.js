import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import ImageLocal from '@base-components/ImageLocal';
import IMAGE from '@constants/image';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen',)
     }, 200)
  }, [])

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
    top: -100
  },
});
