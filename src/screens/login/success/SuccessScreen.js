import ImageLocal from '@base-components/ImageLocal';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import IMAGE from '@constants/image';
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const SuccessScreen = ({ route }) => {

    const { navigate } = useNavigation();
    const { screenName } = route.params;

    useEffect(() => {
        setTimeout(() => {
            if (screenName === 'Đăng ký') {
                navigate('SignInScreen')
            } else if (screenName === 'Đăng nhập') {
                navigate('MainTab')
            }
        }, 500)
    }, []);

    return (
        <View style={styles.container}>
            <Text fontSize={FONT_SIZE.h3} textTransform="uppercase" semibold>{screenName} Thành công</Text>
            <ImageLocal image={IMAGE.success} />
            <Text fontSize={FONT_SIZE.default} center color={COLOR.subText}>Tận hưởng và trải nghiệm những chuyến đi của {`\n`} bạn cùng My Tour!</Text>
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