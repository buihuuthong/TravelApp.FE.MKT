import { PrimaryButton } from '@base-components/Buttons'
import { NormalHeader } from '@base-components/Headers'
import ImageLocal from '@base-components/ImageLocal'
import Modal from '@base-components/Modal'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import globalStyles from '@constants/globalStyles'
import IMAGE from '@constants/image'
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
                    .post(`http://192.168.1.16:8080/api/bookTour`, {
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
                        console.log(e.response);
                    })
            });
    }

    return (
        <View style={styles.container}>
            <NormalHeader
                title="Xác nhận đặt tour"
                onPress={() => goBack()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BookItem title="Thông tin người dùng">
                    <Text fontSize={FONT_SIZE.md}>
                        Họ và tên:{' '}
                        <Text fontSize={FONT_SIZE.md} semibold  >
                            {userInfo?.fullName}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.md}>
                        Số điện thoại:{' '}
                        <Text fontSize={FONT_SIZE.md} semibold  >
                            {userInfo?.phoneNumber}
                        </Text>
                    </Text>
                </BookItem>
                <BookItem title="Thông tin tour">
                    <Text fontSize={FONT_SIZE.md}>Tên tour:{' '}
                        <Text fontSize={FONT_SIZE.md} semibold  >
                            {tourData?.tourName}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.md}>Địa điểm:{' '}
                        <Text fontSize={FONT_SIZE.md} semibold  >
                            {tourData?.tourPlace}
                        </Text>
                    </Text>
                </BookItem>
                <BookItem title="Thông tin đặt tour">
                    <Text fontSize={FONT_SIZE.md}>Trẻ em:{' '}
                        <Text fontSize={FONT_SIZE.md} semibold  >
                            {child}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.md}>Người lớn:{' '}
                        <Text fontSize={FONT_SIZE.md} semibold  >
                            {adults}
                        </Text>
                    </Text>
                    <Text fontSize={FONT_SIZE.md}>Thời gian:{' '}
                        <Text fontSize={FONT_SIZE.md} semibold  >
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
                        <Text fontSize={FONT_SIZE.md}>Hình thức thanh toán: </Text>
                        <Text fontSize={FONT_SIZE.md} semibold>Thanh toán trực tiếp</Text>
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
            <Modal
                visible={modalSuccess}
                onRequestClose={() => {
                    setModalSuccess(!modalSuccess);
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
        </View>
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
        marginVertical: 4,
        borderRadius: 14,
        margin: 14
    },
    input: {
        backgroundColor: COLOR.lightGray
    },
})