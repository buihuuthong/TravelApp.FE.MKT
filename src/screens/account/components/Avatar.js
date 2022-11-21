import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import { Image, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { userInfoSelector, setUserInfo } from '@redux/UserSlice'

const Avatar = () => {
    const userInfo = useSelector(userInfoSelector)

    return (
        <View style={[styles.container, globalStyles.flexRow, globalStyles.shadow]}>
            <View style={styles.avatar}>
                <Image source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                }}
                style={styles.image}
                />
            </View>
            <View style={styles.text}>
                <Text fontSize={FONT_SIZE.lg} color={COLOR.white} semibold>{userInfo?.fullName}</Text>
                <Text fontSize={FONT_SIZE.default} color={COLOR.white} >{userInfo?.email}</Text>
            </View>
        </View>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '20%',
        backgroundColor: COLOR.blue,
        paddingHorizontal: 14,
        marginVertical: 20,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    avatar: {
        backgroundColor: COLOR.gray,
        borderWidth: 3,
        borderColor: COLOR.white,
        borderRadius: 50,
    },
    text: {
        left: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        resizeMode: 'stretch'
    }
});
