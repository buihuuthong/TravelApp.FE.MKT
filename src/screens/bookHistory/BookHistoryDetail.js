import { PrimaryButton } from '@base-components/Buttons'
import { NormalHeader } from '@base-components/Headers'
import { ModalSuccess } from '@base-components/Modal'
import { NormalScreen } from '@base-components/Screen'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import globalStyles from '@constants/globalStyles'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const BookHistoryDetail = ({ route }) => {
    const { bookId } = route.params
    const { navigate, goBack } = useNavigation()
    const [data, setData] = useState([]);
    const [modalCanceled, setModalCanceled] = useState(false);

    useEffect(() => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .get(`http://192.168.1.16:8080/api/bookTour/${bookId}`, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                    })
                    .then(function (res) {
                        setData(res?.data)
                    })
                    .catch(e => {
                        console.log(e);
                    })
            });
    }, []);

    const BookItem = ({ children, title, style }) => {
        return (
            <View style={[styles.bookItem, globalStyles.shadow, style]}>
                <Text fontSize={FONT_SIZE.lg} semibold >{title}</Text>
                {children}
            </View>
        )
    }

    const onConfirm = () => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .post(`http://192.168.1.16:8080/api/bookTour/${bookId}`, {}, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                    })
                    .then(function (res) {
                        setModalCanceled(true)
                        setTimeout(() => {
                            setModalCanceled(false)
                            navigate('BookHistoryCancel')
                        }, 1000)
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
            });
    }

    return (
        <NormalScreen style={styles.container}>
            <NormalHeader
                title="Chi tiết đơn đặt"
                onPress={() => goBack()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BookItem title="Thông tin người dùng">
                    <Text fontSize={FONT_SIZE.default}>
                        Họ và tên:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.user?.fullName}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>
                        Email:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.user?.email}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>
                        Số điện thoại:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.user?.phoneNumber}
                        </Text>
                    </Text>
                </BookItem>
                <BookItem title="Thông tin tour">
                    <Text fontSize={FONT_SIZE.default}>Tên tour:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.tour?.tourName}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>Loại hình:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {
                                data?.tour?.types[0]?.name == 'MOUNT' ? 'Núi' :
                                    data?.tour?.types[0]?.name == 'SEA' ? 'Biển' :
                                        data?.tour?.types[0]?.name == 'NATURE' ? 'Thiên nhiên' :
                                            data?.tour?.types[0]?.name == 'NORMAL' ? 'Tham quan' : null
                            }
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>Địa điểm:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.tour?.tourPlace}
                        </Text>
                    </Text>
                </BookItem>
                <BookItem title="Thông tin đặt tour">
                    <Text fontSize={FONT_SIZE.default}>Trẻ em:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.child}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>Người lớn:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.adults}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>Thời gian:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            Thứ 2 - Thứ 7 • 08:15 - 16:30
                        </Text>
                    </Text>
                </BookItem>
                {!data?.note ? null : 
                    <View style={[styles.bookItem, globalStyles.shadow]}>
                        <Text fontSize={FONT_SIZE.lg} semibold >Lưu ý cho chúng tôi:</Text>
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {data?.note}
                        </Text>
                    </View>
                }
                <BookItem title="Thanh toán" style={{ marginBottom: 120 }}>
                    <View style={[styles.price, globalStyles.sbFlexRow]}>
                        <Text fontSize={FONT_SIZE.default}>Hình thức thanh toán: </Text>
                        <Text fontSize={FONT_SIZE.default} semibold>Thanh toán trực tiếp</Text>
                    </View>
                    <View style={[styles.price, globalStyles.sbFlexRow]}>
                        <Text fontSize={FONT_SIZE.h1} semibold>Tổng tiền: </Text>
                        <Text fontSize={FONT_SIZE.h1} color={COLOR.blue} semibold price>{data?.totalPrice}</Text>
                    </View>
                </BookItem>
            </ScrollView>
            {data?.isCanceled ? null :
                <PrimaryButton
                    text='Hủy tour'
                    style={{
                        shadowColor: 'red',
                        marginVertical: 10,
                        position: 'absolute',
                        bottom: '5%',
                    }}
                    bgColor={COLOR.red}
                    center
                    onPress={() => navigate('Alert', {
                        title: 'Xác nhận hủy tour?',
                        cancelText: 'Hủy',
                        onConfirm: () => {onConfirm()},
                        onCancel: () => {},
                    })}
                />}
            <ModalSuccess
                visible={modalCanceled}
                onRequestClose={() => {
                    setModalCanceled(!modalCanceled);
                }}
            />
        </NormalScreen>
    )
}

export default BookHistoryDetail;

const styles = StyleSheet.create({
    bookItem: {
        backgroundColor: COLOR.white,
        padding: 14,
        borderRadius: 14,
        margin: 4
    },
    input: {
        backgroundColor: COLOR.lightGray
    },
})