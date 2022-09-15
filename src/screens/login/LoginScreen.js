import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import { PrimaryButton } from '@base-components/Buttons';

const LoginScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text fontSize={FONTSIZE.h3} color={COLOR.lightPink}>Need to Login Sir!</Text>
      <PrimaryButton style={{ marginTop: 10}} text="Login!" onPress={() => navigate('Alert', {
        description: "Bạn muốn đăng nhập",
        cancelText: "Hủy", 
        confirmText: "Xác nhận", 
        onCancel: () => {goBack}, 
        onConfirm: () => {navigate('HomeScreen')},
      })} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
