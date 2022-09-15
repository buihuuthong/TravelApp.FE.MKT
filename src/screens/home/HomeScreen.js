import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import { PrimaryButton } from '@base-components/Buttons';

const HomeScreen = () => {
  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    navigate('Loading')
    setTimeout(() => { goBack() }, 1000)
  }, []);

  return (
    <View style={styles.container}>
      <Text fontSize={FONTSIZE.h2} color={COLOR.hardPink}>
        Bonjour!
      </Text>
      <PrimaryButton text="Logout!" onPress={() => navigate('LoginScreen')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
