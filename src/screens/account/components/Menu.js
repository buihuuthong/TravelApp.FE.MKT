import ImageLocal from '@base-components/ImageLocal';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import IMAGE from '@constants/image';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const Menu = () => {
  const { navigate, goBack } = useNavigation();

  const onConfirm = () => {
    auth()
      .signOut()
      .then(() => navigate('LoginScreen'));
  }

  const MenuItem = ({ onPress, icon, title }) => {
    return(
        <TouchableOpacity style={[styles.menuItem, globalStyles.sbFlexRow, globalStyles.shadow]} onPress={onPress}>
            <ImageLocal image={icon} />
            <Text fontSize={FONT_SIZE.default} semibold >{title}</Text>
            <ImageLocal image={IMAGE.arrowRight} />
        </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
        <MenuItem
            title="Thông tin người dùng"
            icon={IMAGE.infor}
            onPress={() => navigate('UserInfo')}
        />
        <MenuItem
            title="Địa chỉ"
            icon={IMAGE.locat}
        />
        <MenuItem
            title="Đã lưu"
            icon={IMAGE.love2}
            onPress={() => navigate('BookmarkScreen')}
        />
        <MenuItem
            title="Thông báo"
            icon={IMAGE.notify}
        />
        <MenuItem
            title="Đăng xuất"
            icon={IMAGE.pay}
            onPress={onConfirm}
        />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  menuItem: {
    padding: 8,
    backgroundColor: COLOR.white,
    borderRadius: 32,
    marginVertical: 4
  }
});
