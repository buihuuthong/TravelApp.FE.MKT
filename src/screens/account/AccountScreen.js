import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import { PrimaryButton } from '@base-components/Buttons';
import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
  const { navigate, goBack } = useNavigation();

  const onConfirm = () => {
    auth()
      .signOut()
      .then(() => navigate('LoginScreen'));
  }

  return (
    <View style={styles.container}>
      <Text fontSize={FONTSIZE.h2} color={COLOR.hardPink}>
        AccountScreen!
      </Text>
      <PrimaryButton
        text='Đăng xuất'
        style={{ shadowColor: '#0192FA' }}
        bgColor={COLOR.lightBlue}
        onPress={onConfirm}
        center
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
