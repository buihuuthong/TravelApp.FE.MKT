import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // top: 20
    }
})

export const LoginHeader = ({ title, description }) => {
    return(
        <View>
            <Text fontSize={FONT_SIZE.g3} color={COLOR.blue} semibold>{title}</Text>
            <Text fontSize={FONT_SIZE.h4} color={COLOR.text}>{description}</Text>
        </View>
    )
}