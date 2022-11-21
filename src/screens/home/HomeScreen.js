import { NormalScreen } from '@base-components/Screen';
import { HomeSearch } from '@base-components/Search';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import { useEffect } from 'react';
import { LogBox, ScrollView } from 'react-native';
import Recommend from './components/Recommend';
import Topic from './components/Topic';

const HomeScreen = () => {

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  });

  return (
    <NormalScreen>
      <Text fontSize={FONTSIZE.g1} color={COLOR.blue} semibold>My Travel</Text>
      <Text fontSize={FONTSIZE.lg} color={COLOR.subText} >
        Tận hưởng trọn vẹn chuyến du lịch của bạn.
      </Text>
      <HomeSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Recommend/>
        <Topic/>
      </ScrollView>
    </NormalScreen>
  );
};

export default HomeScreen;
