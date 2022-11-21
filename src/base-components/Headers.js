import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import IMAGE from '@constants/image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ImageLocal from './ImageLocal';

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        marginBottom: 12,
    },
    item: {
        width: '15%'
    }
})
export const NormalHeader = ({ title, onPress }) => {
    return(
        <View style={[styles.container, globalStyles.sbFlexRow]}>
            {onPress ?
            <TouchableOpacity style={styles.item} onPress={onPress}>
                <ImageLocal image={IMAGE.goback2} />
            </TouchableOpacity> 
            : 
            <View style={styles.item}/>
            }
            <Text center fontSize={FONT_SIZE.h2} color={COLOR.blue} semibold>{title}</Text>
            <View style={styles.item}/>
        </View>
    )
}

export const LoginHeader = ({ title, description }) => {
    return(
        <View>
            <Text fontSize={FONT_SIZE.g3} color={COLOR.blue} semibold>{title}</Text>
            <Text fontSize={FONT_SIZE.h4} color={COLOR.text}>{description}</Text>
        </View>
    )
}