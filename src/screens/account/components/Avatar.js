import { SquareImage } from '@base-components/ImageLocal';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import IMAGE from '@constants/image';
import { StyleSheet, View } from 'react-native';

const Avatar = () => {
    return (
        <View style={[styles.container, globalStyles.flexRow]}>
            <View style={styles.avatar}>
                <SquareImage image={IMAGE.account} size={82} resizeMode="center"/>
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
    }
});
