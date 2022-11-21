import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import { StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';

export const NormalInput = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={COLOR.subText}
            style={styles.normalInput}
            value={value}
            onChangeText={onChangeText}
        />
    )
}


export const InfoInput = ({ title, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.infoInput}>
            <Text fontSize={FONT_SIZE.default} semibold>{title}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.inputInfo}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    normalInput: {
        borderWidth: 1,
        borderColor: COLOR.text,
        borderRadius: 10,
        fontSize: FONT_SIZE.default,
        padding: 14,
        margin: 5
    },
    infoInput: {
        paddingVertical: 12
    },
    inputInfo: {
        backgroundColor: COLOR.gray,
        paddingHorizontal: 12,
        borderRadius: 10
    }
})
