import ImageLocal from '@base-components/ImageLocal'
import Modal from '@base-components/Modal'
import Text from '@base-components/Text'
import FONT_SIZE from '@constants/fontSize'
import IMAGE from '@constants/image'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const NumSelect = ({ isChild, selectedValue, onValueChange }) => {

    return (
        <View style={styles.container}>
            <View style={styles.numselector}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>
            </View>
            <Text fontSize={FONT_SIZE.md} semibold>{isChild ? ' Trẻ em' : ' Người lớn'}</Text>
        </View>
    )
}

export default NumSelect

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    numselector: {
        backgroundColor: '#fff',
        borderRadius: 12,
        width: 100,
    },
})