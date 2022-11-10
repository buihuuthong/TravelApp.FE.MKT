import Item from '@base-components/Item';
import ListMenu from '@base-components/ListMenu';
import { NormalScreen } from '@base-components/Screen';
import { HomeSearch } from '@base-components/Search';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { LogBox, ScrollView } from 'react-native';
import MenuItem from './components/MenuItem';

const HomeScreen = () => {
  const [tourData, setTourData] = useState();

  useEffect(() => {
    firestore()
      .collection('accessToken')
      .doc(auth()?.currentUser?.uid)
      .onSnapshot(documentSnapshot => {
        axios
          .get(`http://192.168.1.16:8080/api/tours`, {
            headers: {
              Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
            },
          })
          .then(function (res) {
            setTourData(res.data)
          })
          .catch(e => {
            console.log(e);
          })
      });
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, []);

  return (
    <NormalScreen>
      <Text fontSize={FONTSIZE.h1} color={COLOR.blue} semibold>My Travel</Text>
      <Text fontSize={FONTSIZE.lg} color={COLOR.subText} >
        Tận hưởng trọn vẹn chuyến du lịch của bạn.
      </Text>
      <HomeSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListMenu
          title="Gợi ý cho bạn"
        />
        <MenuItem data={tourData} isTopic />
        <ListMenu
          title="Chủ đề"
        >
          <Item title="Tất cả" isActive />
          <Item title="Tham quan" />
          <Item title="Thiên nhiên" />
          <Item title="Biển" />
        </ListMenu>
        <MenuItem data={tourData} />
      </ScrollView>
    </NormalScreen>
  );
};

export default HomeScreen;
