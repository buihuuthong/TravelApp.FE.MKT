import { HomeSearch } from '@base-components/Search';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import { ScrollView, StyleSheet, View } from 'react-native';
import Item from '@base-components/Item';
import ListMenu from '@base-components/ListMenu';
import MenuItem from './components/MenuItem';

const HomeScreen = () => {

  const data = [
    {
      name: 'LangBiang',
      rating: 4.3,
    },
    {
      name: 'LangBiang',
      rating: 4.3,
    },
    {
      name: 'LangBiang',
      rating: 4.3,
    },
  ]

  return (
    <View style={styles.container}>
      <Text fontSize={FONTSIZE.h1} color={COLOR.blue} semibold>My Travel</Text>
      <Text fontSize={FONTSIZE.lg} color={COLOR.subText} >
        Tận hưởng trọn vẹn chuyến du lịch của bạn.
      </Text>
      <HomeSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListMenu
          title="Chủ đề"
        >
          <Item title="Tất cả" isActive />
          <Item title="Tham quan" />
          <Item title="Thiên nhiên" />
          <Item title="Biển" />
        </ListMenu>
        <MenuItem data={data} isTopic />
        <ListMenu
          title="Gợi ý cho bạn"
        />
        <MenuItem data={data} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});
