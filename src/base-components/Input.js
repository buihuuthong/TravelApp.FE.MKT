import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import { StyleSheet, TextInput } from 'react-native';

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


const styles = StyleSheet.create({
    normalInput: {
        borderWidth: 1,
        borderColor: COLOR.text,
        borderRadius: 10,
        fontSize: FONT_SIZE.md,
        padding: 14,
        margin: 5
    }
})
