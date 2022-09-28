import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import ImageLocal from '@base-components/ImageLocal';
import IMAGE from '@constants/image';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import { PrimaryButton } from '@base-components/Buttons';

const styles = StyleSheet.create({
    container: {
        // flex: 1
    }
})

export const LoginHeader = ({ title, description }) => {
    return(
        <View style={styles.container}>
            <Text fontSize={FONT_SIZE.g3} color={COLOR.blue} semibold>{title}</Text>
            <Text fontSize={FONT_SIZE.h4} color={COLOR.text}>{description}</Text>
        </View>
    )
}