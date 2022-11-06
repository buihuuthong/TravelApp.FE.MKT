import React from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Text from '@base-components/Text'
import FONT_SIZE from '@constants/fontSize'
import COLOR from '@constants/color'

const Item = ({ title, onPress, isActive }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[isActive ? styles.containerA : styles.container]}
        >
            <Text
                fontSize={FONT_SIZE.md}
                color={isActive ? COLOR.white : COLOR.subText}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 20,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    containerA: {
        backgroundColor: COLOR.blue,
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 20,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})