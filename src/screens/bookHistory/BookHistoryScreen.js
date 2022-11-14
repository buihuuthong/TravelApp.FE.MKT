import { NormalHeader } from '@base-components/Headers';
import ImageLocal from '@base-components/ImageLocal';
import Modal from '@base-components/Modal';
import { NormalScreen } from '@base-components/Screen';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import IMAGE from '@constants/image';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

const BookHistoryScreen = () => {
    const [data, setData] = useState([]);
    const { navigate, goBack } = useNavigation()
    const [modalCanceled, setModalCanceled] = useState(false);

    const getBookTour = () => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .get(`http://192.168.1.16:8080/api/bookTour`, {
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
        const onCanceled = () => {
            firestore()
                .collection('accessToken')
                .doc(auth()?.currentUser?.uid)
                .onSnapshot(documentSnapshot => {
                    axios
                        .post(`http://192.168.1.16:8080/api/bookTour/${item.id}`, {}, {
                            headers: {
                                Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                            },
                        })
                        .then(function (res) {
                            setModalCanceled(true)
                            setTimeout(() => { 
                                setModalCanceled(false)
                                getBookTour()
                            }, 1000)
                        })
                        .catch(e => {
                            console.log(e.response);
                        })
                });
        }

        return (
            <View style={[styles.item, globalStyles.shadow]}>
                <View style={globalStyles.sbFlexRow}>
                    <Text fontSize={FONT_SIZE.md}  >Tên tour: </Text>
                    <Text fontSize={FONT_SIZE.lg} semibold >{item?.tour?.tourName}</Text>
                </View>
                <View style={globalStyles.sbFlexRow}>
                    <Text fontSize={FONT_SIZE.md}  >Địa điểm: </Text>
                    <Text fontSize={FONT_SIZE.md} semibold  >{item?.tour?.tourPlace}</Text>
                </View>
                <View style={globalStyles.sbFlexRow}>
                    <Text fontSize={FONT_SIZE.md}  >Thời gian: </Text>
                    <Text fontSize={FONT_SIZE.md} semibold  >Thứ 2 - Thứ 7 • 08:15 - 16:30</Text>
                </View>
                <View style={[globalStyles.flexRow, globalStyles.center]}>
                    <TouchableOpacity
                        style={[styles.btn, globalStyles.shadow, { backgroundColor: COLOR.blue }]}
                        onPress={() => navigate('BookHistoryDetail', {
                            bookId: item.id
                        })}
                    >
                        <Text fontSize={FONT_SIZE.md} color={COLOR.white} >Chi tiết</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, globalStyles.shadow, { backgroundColor: COLOR.red }]}
                        onPress={() => navigate('Alert', {
                            title: 'Xác nhận hủy tour?',
                            cancelText: 'Hủy',
                            onConfirm: () => onCanceled()
                        })}
                        disabled={item?.isCanceled}
                    >
                        <Text fontSize={FONT_SIZE.md} color={COLOR.white} >{item?.isCanceled ? 'Đã hủy' : 'Hủy tour'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <NormalScreen>
            <NormalHeader title="Lịch sử đặt tour" />
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={bookItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <Modal
                visible={modalCanceled}
                onRequestClose={() => {
                    setModalCanceled(!modalCanceled);
                }}
            >
                <ImageLocal image={IMAGE.tick}
                />
                <View style={globalStyles.center}>
                    <Text fontSize={FONT_SIZE.h3} semibold >Thành công</Text>
                    <Text fontSize={FONT_SIZE.lg}>
                        Cảm ơn bạn đã sử dụng dịch vụ.
                    </Text>
                    <Text fontSize={FONT_SIZE.md}> Vui lòng kiểm tra lại Gmail.</Text>
                </View>
            </Modal>
        </NormalScreen>
    );
};

export default BookHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        backgroundColor: COLOR.white,
        padding: 14,
        margin: 4,
        borderRadius: 14
    },
    btn: {
        paddingVertical: 4,
        paddingHorizontal: 24,
        marginTop: 8,
        marginHorizontal: 14,
        borderRadius: 5
    }
});
