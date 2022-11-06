import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Text from './Text'
import FONT_SIZE from '@constants/fontSize'
import COLOR from '@constants/color'
import ImageLocal from './ImageLocal'
import IMAGE from '@constants/image'

export const HomeSearch = ({ value, onChangeText }) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Tìm kiếm'
                value={value}
                onChangeText={onChangeText}
                style={styles.text}
            />
            <ImageLocal image={IMAGE.search} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 38,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        fontSize: FONT_SIZE.md,
        paddingHorizontal: 12,
        width: '80%'
    }
})