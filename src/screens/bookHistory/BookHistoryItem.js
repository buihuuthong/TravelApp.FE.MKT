import ImageLocal, { SquareImage } from '@base-components/ImageLocal';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import IMAGE from '@constants/image';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

const BookHistoryItem = ({ route }) => {
    const { isCanceled } = route.params;

    const [data, setData] = useState([]);
    const { navigate } = useNavigation()

    const getBookTour = () => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .get(`http://192.168.1.16:8080/api/bookTour?isCanceled=${isCanceled}`, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
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
        getBookTour()
    });

    const bookItem = ({ item }) => {
        return (
            <View style={[styles.item, globalStyles.shadow, globalStyles.sbFlexRow]}>
                <View style={globalStyles.sbFlexRow}>
                    <SquareImage uri={`http://192.168.1.16:8080/api/tours/image?id=${item?.tour?.id}`} style={styles.img} />
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
                <TouchableOpacity 
                    style={[styles.detail, globalStyles.flexRow]}
                    onPress={() => navigate('BookHistoryDetail', {
                        bookId: item?.id
                    })}
                >
                    <Text fontSize={FONT_SIZE.md} semibold color={COLOR.blue} >Chi tiết</Text>
                    <ImageLocal image={IMAGE.arrowRight} />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={bookItem}
            keyExtractor={(item, index) => index.toString()}
            style={{ backgroundColor: COLOR.white }}
        />
    );
};

export default BookHistoryItem;

const styles = StyleSheet.create({
    item: {
        padding: 4,
        margin: 4,
        borderRadius: 14,
        backgroundColor: COLOR.white
    },
    img: {
        height: 80,
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 80,
        paddingVertical: 5,
        left: 10,
    },
    detail: {
        alignSelf: 'flex-end',
    }
});
