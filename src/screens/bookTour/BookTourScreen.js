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
import { tourInfoSelector } from '@redux/TourSlice'
import { userInfoSelector } from '@redux/UserSlice'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Keyboard, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { useSelector } from 'react-redux'

const BookTourScreen = ({ route }) => {
    const { tour, adults, child, totalPrice } = route.params;
    const { navigate, goBack } = useNavigation()
    const userInfo = useSelector(userInfoSelector)
    const tourInfor = useSelector(tourInfoSelector)
    const [tourData, setTourData] = useState([]);
    const [note, setNote] = useState();
    const [modalSuccess, setModalSuccess] = useState(false);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        if (tour === tourInfor?.id) {
            setTourData(tourInfor)
        }
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
                    .post(`http://192.168.216.52:8080/api/bookTour`, {
                        "adult": adults,
                        "child": child,
                        "note": note,
                        "isCanceled": false,
                        "totalPrice": totalPrice,
                    }, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                        params: {
                            "tourId": tour,
                            "userId": userInfo.id
                        }
                    })
                    .then(function (res) {
                        setModalSuccess(true)
                        setTimeout(() => {
                            setModalSuccess(false)
                            navigate('BookHistoryScreen')
                        }, 1000)
                    })
                    .catch(e => {
                        console.log(e.response?.data?.code);
                        navigate('Alert',{
                            title: e.response?.data?.code === 'BOOK_TOUR_ALREADY_EXIST' ? 'Tour đã được đặt trước đó' : e.response?.data?.code
                        })
                    })
            });
    }

    return (
        <NormalScreen style={styles.container}>
            <NormalHeader
                title="Xác nhận đặt tour"
                onPress={() => goBack()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BookItem title="Thông tin người dùng">
                    <Text fontSize={FONT_SIZE.default}>
                        Họ và tên:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {userInfo?.fullName}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>
                        Số điện thoại:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {userInfo?.phoneNumber}
                        </Text>
                    </Text>
                </BookItem>
                <BookItem title="Thông tin tour">
                    <Text fontSize={FONT_SIZE.default}>Tên tour:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {tourData?.tourName}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>Địa điểm:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {tourData?.tourPlace}
                        </Text>
                    </Text>
                </BookItem>
                <BookItem title="Thông tin đặt tour">
                    <Text fontSize={FONT_SIZE.default}>Trẻ em:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {child}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>Người lớn:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            {adults}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.default}>Thời gian:{' '}
                        <Text fontSize={FONT_SIZE.default} semibold  >
                            Thứ 2 - Thứ 7 • 08:15 - 16:30
                        </Text>
                    </Text>
                </BookItem>
                <View style={[styles.bookItem, globalStyles.shadow]}>
                    <Text fontSize={FONT_SIZE.lg} semibold >Lưu ý cho chúng tôi:</Text>
                    <TextInput
                        placeholder="Lưu ý cho chúng tôi"
                        onChangeText={(text) => setNote(text)}
                        value={note}
                        style={styles.input}
                        multiline={true}
                        numberOfLines={5}
                        underlineColorAndroid="transparent"
                        require={true}
                        textAlignVertical="top"
                    />
                </View>
                <BookItem title="Thanh toán" style={{ marginBottom: 120 }}>
                    <View style={[styles.price, globalStyles.sbFlexRow]}>
                        <Text fontSize={FONT_SIZE.default}>Hình thức thanh toán: </Text>
                        <Text fontSize={FONT_SIZE.default} semibold>Thanh toán trực tiếp</Text>
                    </View>
                    <View style={[styles.price, globalStyles.sbFlexRow]}>
                        <Text fontSize={FONT_SIZE.h1} semibold>Tổng tiền: </Text>
                        <Text fontSize={FONT_SIZE.h1} color={COLOR.blue} semibold price>{totalPrice}</Text>
                    </View>
                </BookItem>
            </ScrollView>
            <PrimaryButton
                display={isKeyboardVisible}
                text='Xác nhận'
                style={{
                    shadowColor: '#0192FA',
                    marginVertical: 10,
                    position: 'absolute',
                    bottom: '5%',
                }}
                bgColor={COLOR.lightBlue}
                center
                onPress={onConfirm}
            />
            <ModalSuccess
                visible={modalSuccess}
                onRequestClose={() => {
                    setModalSuccess(!modalSuccess);
                }} />
        </NormalScreen>
    )
}

export default BookTourScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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