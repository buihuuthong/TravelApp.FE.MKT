import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import { PrimaryButton } from '@base-components/Buttons';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  const { navigate, goBack } = useNavigation();
  
  useEffect(() => {
    const getToken = async () => {
        try {
          const token = await messaging().getToken();
        //   if (token) return token;
        console.log(token);
        } catch (error) {
          console.log(error);
        }
      };
    getToken();
}, []);

  return (
    <View style={styles.container}>
      <Text fontSize={FONTSIZE.h2} color={COLOR.hardPink}>
        HomeScreen!
      </Text>
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
