import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = () => {
    return (
        <View style={[styles.container, globalStyles.flexRow]}>
            <View style={styles.avatar}>
                <Image source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/8/84/%C4%90%E1%BB%89nh_Langbiang.JPG'
                }}
                style={styles.image}
                />
            </View>
            <View style={styles.text}>
                <Text fontSize={FONT_SIZE.lg} color={COLOR.white} semibold>Bùi Hữu Thông</Text>
                <Text fontSize={FONT_SIZE.default} color={COLOR.white} >buihuuthong2806</Text>
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
