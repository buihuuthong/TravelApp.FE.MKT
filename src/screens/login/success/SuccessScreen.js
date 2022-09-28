import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '@base-components/Text'
import ImageLocal from '@base-components/ImageLocal'
import IMAGE from '@constants/image'
import FONT_SIZE from '@constants/fontSize'
import COLOR from '@constants/color'

const SuccessScreen = () => {

    return (
        <View style={styles.container}>
            <Text fontSize={FONT_SIZE.h3} textTransform="uppercase" semibold>Thành công</Text>
            <ImageLocal image={IMAGE.success} />
            <Text fontSize={FONT_SIZE.md} center color={COLOR.subText}>Tận hưởng và trải nghiệm những chuyến đi của {`\n`} bạn cùng My Tour!</Text>
        </View>
    )
}

export default SuccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})