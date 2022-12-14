import { PrimaryButton } from '@base-components/Buttons'
import { NormalHeader } from '@base-components/Headers'
import { InfoInput } from '@base-components/Input'
import { ModalInfoSuccess } from '@base-components/Modal'
import { NormalScreen } from '@base-components/Screen'
import COLOR from '@constants/color'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { setUserInfo, userInfoSelector } from '@redux/UserSlice'
import axios from 'axios'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const UserInfo = () => {
    const { goBack, navigate } = useNavigation()
    const dispatch = useDispatch()
    const userInfo = useSelector(userInfoSelector)
    const [fullName, setFullName] = useState(userInfo?.fullName);
    const [email, setEmail] = useState(userInfo?.email);
    const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber);
    const [modalSuccess, setModalSuccess] = useState(false);

    const onConfirm = () => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .put(`http://192.168.216.52:8080/api/user/my`, {
                        "email": email,
                        "fullName": fullName,
                        "phoneNumber": phoneNumber,
                    }, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                    })
                    .then(function (res) {
                        dispatch(setUserInfo(res.data))
                        setModalSuccess(true)
                        setTimeout(() => {
                            setModalSuccess(false)
                            goBack()
                        }, 1000)
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
            });
    }

    return (
        <NormalScreen>
            <NormalHeader
                title="Thông tin người dùng"
                onPress={() => goBack()}
            />
            <InfoInput
                title="Họ và tên:"
                placeholder="Nhập họ và tên"
                value={fullName}
                onChangeText={(value) => setFullName(value)}
            />
            <InfoInput
                title="Email:"
                placeholder="Nhập địa chỉ email"
                value={email}
                onChangeText={(value) => setEmail(value)}
            />
            <InfoInput
                title="Số điện thoại:"
                placeholder="Nhập số điện thoại"
                value={phoneNumber}
                onChangeText={(value) => setPhoneNumber(value)}
            />
            { fullName != userInfo?.fullName
            || email != userInfo?.email
            || phoneNumber != userInfo?.phoneNumber ? 
            <PrimaryButton
                text='Cập nhật'
                style={{
                    shadowColor: 'blue',
                    marginVertical: 12
                }}
                bgColor={COLOR.blue}
                center
                onPress={() => navigate('Alert', {
                    title: 'Bạn muốn cập nhật thông tin?',
                    onConfirm: () => {onConfirm()}
                })}
            /> : null }
            <ModalInfoSuccess
                visible={modalSuccess}
                onRequestClose={() => {
                    setModalSuccess(!modalSuccess);
                }} />
        </NormalScreen>
    )
}

export default UserInfo

const styles = StyleSheet.create({
})