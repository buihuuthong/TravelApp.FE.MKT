import { NormalHeader } from '@base-components/Headers';
import ImageLocal, { SquareImage } from '@base-components/ImageLocal';
import { NormalScreen } from '@base-components/Screen';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import IMAGE from '@constants/image';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { userInfoSelector } from '@redux/UserSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

const BookmarkScreen = () => {

  const [data, setData] = useState([]);
  const { navigate } = useNavigation()
  const user = useSelector(userInfoSelector)

  const getSaveTour = () => {
    firestore()
      .collection('accessToken')
      .doc(auth()?.currentUser?.uid)
      .onSnapshot(documentSnapshot => {
        axios
          .get(`http://192.168.216.52:8080/api/saveTour/my`, {
            headers: {
              Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
            },
            params: {
              id: user.id
            }
          })
          .then(function (res) {
            setData(res.data)
          })
          .catch(e => {
            console.log(e);
          })
      });
  }

  useEffect(() => {
    getSaveTour()
  });

  const unSaveTour = (item) => {
    firestore()
        .collection('accessToken')
        .doc(auth()?.currentUser?.uid)
        .onSnapshot(documentSnapshot => {
            axios
                .delete(`http://192.168.216.52:8080/api/saveTour/${item}`, {
                    headers: {
                        Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                    },
                })
                .then(function (res) {
                  console.log(res.data);
                  getSaveTour()
                })
                .catch(e => {
                    console.log(e);
                })
        });
  }

  const saveItem = ({ item }) => {
    return (
      <View style={[styles.item, globalStyles.shadow, globalStyles.sbFlexRow]}>
        <View style={globalStyles.sbFlexRow}>
          <SquareImage uri={`http://192.168.216.52:8080/api/tours/image?id=${item?.tour?.id}`} style={styles.img} />
          <View style={styles.text}>
            <View style={globalStyles.flexRow}>
              <ImageLocal image={IMAGE.locationBlue} />
              <Text fontSize={FONT_SIZE.default} color={COLOR.blue} > {item?.tour?.tourPlace}</Text>
            </View>
            <Text fontSize={FONT_SIZE.default} color={COLOR.text} semibold>{item?.tour?.tourName}</Text>
            <View style={globalStyles.flexRow}>
              <ImageLocal image={IMAGE.star} />
              <Text
                fontSize={FONT_SIZE.default}
                color={COLOR.yellow}
              >
                {item?.tour?.rating}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.detail, globalStyles.sbFlexCol]}
        >
          <TouchableOpacity
            onPress={() => navigate('Alert', {
              title: 'Bỏ lưu tour này?',
              onConfirm: () => {unSaveTour(item?.id)},
              onCancel: () => {},
            })}
            style={{ alignSelf: 'flex-end' }}
          >
            <ImageLocal image={IMAGE.bookmarkActive} color={COLOR.blue} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.detail, globalStyles.flexRow]}
            onPress={() => navigate('TourScreen', {
              tourId: item?. tour?.id
            })}
          >
            <Text fontSize={FONT_SIZE.md} semibold color={COLOR.blue} >Chi tiết</Text>
            <ImageLocal image={IMAGE.arrowRight} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <NormalScreen>
      <NormalHeader title="Tour đã lưu" />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={saveItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ backgroundColor: COLOR.white }}
      />
    </NormalScreen>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  item: {
    padding: 4,
    margin: 4,
    borderRadius: 14,
    backgroundColor: COLOR.white,
  },
  img: {
    height: 80,
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 5,
    left: 10,
    height: 80,
  },
  detail: {
    height: 80,
  }
});

