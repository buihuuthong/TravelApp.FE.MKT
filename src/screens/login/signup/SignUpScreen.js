import { PrimaryButton } from '@base-components/Buttons';
import { LoginHeader } from '@base-components/Headers';
import { NormalInput } from '@base-components/Input';
import Screen from '@base-components/Screen';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';
import login from '@services/login';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const SignUpScreen = () => {
    const { navigate, goBack } = useNavigation();
    const [fullName, setFullName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const onConfirm = async () => {
        if(confirmPassword < 6){
            navigate('Alert',{
                description: 'Mật khẩu phải lớn hơn 6 kí tự!'
            })
        }
        if(password !== confirmPassword){
            navigate('Alert',{
                description: 'Xác nhận mật khẩu chưa đúng!'
            })
        }
        try {
            navigate('Loading')
            await login.signup( email, fullName, confirmPassword, phoneNumber, username);
            auth().createUserWithEmailAndPassword(username + '@gmail.com', confirmPassword)
            goBack();
            navigate('SuccessScreen', {
                screenName: 'Đăng ký'
            })
        } catch (error) {
            goBack();
            navigate('Alert',{
                description: error
            })
        }
    }

    return (
        <Screen noSafe>
            <LoginHeader
                title="Đăng ký,"
                description={"Tham gia cùng My Tour và \n bắt đầu những chuyến đi của bạn!"}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <NormalInput
                    placeholder="Họ và tên"
                    value={fullName}
                    onChangeText={setFullName}
                />
                <NormalInput
                    placeholder="Tài khoản"
                    value={username}
                    onChangeText={setUsername}
                />
                <NormalInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <NormalInput
                    placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <NormalInput
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                />
                <NormalInput
                    placeholder="Xác nhận mật khẩu"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            <PrimaryButton
                text='Đăng ký'
                style={{ shadowColor: '#0192FA', top: 10 }}
                bgColor={COLOR.lightBlue}
                onPress={onConfirm}
                center
            />
            <View style={styles.signinNow}>
                <Text fontSize={FONT_SIZE.default} semibold>Bạn đã có tài khoản? </Text>
                <TouchableOpacity
                    onPress={() => navigate('SignInScreen')}
                >
                    <Text
                        fontSize={FONT_SIZE.default}
                        color={COLOR.blue}
                        semibold
                    >Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Screen>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    orContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    line: {
        height: 1,
        width: 120,
        backgroundColor: '#000'
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 100,
    },
    signinNow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    }
})