import { PrimaryButton } from '@base-components/Buttons'
import { NormalHeader } from '@base-components/Headers'
import { InfoInput } from '@base-components/Input'
import { NormalScreen } from '@base-components/Screen'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { setUserInfo, userInfoSelector } from '@redux/UserSlice'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const UserInfo = () => {
    const { goBack } = useNavigation()
    const dispatch = useDispatch()
    const userInfo = useSelector(userInfoSelector)
    const [fullName, setFullName] = useState(userInfo?.fullName);
    const [email, setEmail] = useState(userInfo?.email);
    const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber);

    const onConfirm = () => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .put(`http://192.168.1.16:8080/api/user/my`, {
                        "email": email,
                        "fullName": fullName,
                        "phoneNumber": phoneNumber,
                    }, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                    })
                    .then(function (res) {
                        goBack()
                        dispatch(setUserInfo(res.data))
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
            <PrimaryButton
                text='Cập nhật'
                style={{
                    shadowColor: 'blue',
                    marginVertical: 12
                }}
                bgColor={COLOR.blue}
                center
                onPress={() => onConfirm()}
            />
        </NormalScreen>
    )
}

export default UserInfo

const styles = StyleSheet.create({
})