import React from 'react'
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import ImageLocal from '@base-components/ImageLocal'
import IMAGE from '@constants/image'
import { useNavigation } from '@react-navigation/native'

const ImageTour = () => {

    const { navigate, goBack } = useNavigation()

    return (
        <ImageBackground source={require('../../../../src/assets/langbiang.jpg')}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => goBack()}>
                    <ImageLocal image={IMAGE.goback} />
                </TouchableOpacity>
                <View style={{ top: -20 }}>
                    <Text fontSize={FONT_SIZE.h2} color={COLOR.white} semibold >Langbiang</Text>
                    <View style={styles.text}>
                        <View style={styles.textItem}>
                            <View style={styles.location}>
                                <ImageLocal image={IMAGE.location} />
                                <Text fontSize={FONT_SIZE.default} color={COLOR.white}> Đà Lạt</Text>
                            </View>
                            <View style={styles.location}>
                                <ImageLocal image={IMAGE.star} />
                                <Text fontSize={FONT_SIZE.default} color={COLOR.yellow}>5</Text>
                            </View>
                        </View>
                        <View style={[styles.textItem, { width: '20%'}]}>
                            <TouchableOpacity>
                                <ImageLocal image={IMAGE.share} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ImageLocal image={IMAGE.love} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default ImageTour

const styles = StyleSheet.create({
    container: {
        height: 240,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%'
    },
})