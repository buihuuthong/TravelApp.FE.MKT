import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import globalStyles from '@constants/globalStyles'
import { StyleSheet, TouchableOpacity } from 'react-native'

const Item = ({ title, onPress, isActive }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, globalStyles.shadow, { 
                backgroundColor: isActive ? COLOR.blue : '#fff' 
            }]}
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
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 20,
        margin: 4
    },
})