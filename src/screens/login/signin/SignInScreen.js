import { PrimaryButton, SocialButton } from '@base-components/Buttons';
import { LoginHeader } from '@base-components/Headers';
import { NormalInput } from '@base-components/Input';
import Screen from '@base-components/Screen';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import IMAGE from '@constants/image';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/core';
import login from '@services/login';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '@redux/UserSlice';

const SignInScreen = () => {
    const { navigate, goBack } = useNavigation();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        auth()
            .signOut()
    }, []);

    const onConfirm = async () => {
        try {
            navigate('Loading')
            const user = await login.signin(password, username);
            dispatch(setUserInfo(user))

            auth()
                .signInWithEmailAndPassword(username + '@gmail.com', password)
                .then(() => {
                    console.log('User account created & signed in!');
                    navigate('SuccessScreen', {
                        screenName: 'Đăng nhập'
                    })
                    firestore()
                        .collection('accessToken')
                        .doc(auth()?.currentUser?.uid)
                        .set({
                            token: user?.accessToken
                        })
                        .then(() => {
                            console.log('Token added!');
                        });
                })
                .catch(error => {
                    goBack();
                    navigate('Alert', {
                        description: error.code === 'auth/user-not-found'
                            ? 'Tài khoản chưa được đăng ký' : error.code
                    })
                });
        } catch (error) {
            console.log("error", error);
            // goBack();
            // navigate('Alert', {
            //     description: error.response.data.message === 'must not be blank'
            //         ? 'Tài khoản và mật khẩu không được để trống' : error.response.data.code
            // })
        }
    }

    const onNext = () => {
        navigate('Alert', {
            description: `Tính năng chưa phát triển\nVui lòng thử lại sau <3`
        })
    }

    return (
        <Screen center>
            <LoginHeader
                title="Xin chào,"
                description="Hãy cùng bắt đầu hành trình của bạn nào!"
            />
            <View style={styles.inputContainer}>
                <NormalInput
                    placeholder="Tài khoản"
                    value={username}
                    onChangeText={setUsername}
                />
                <NormalInput
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity
                style={{ alignItems: 'flex-end', padding: 10 }}
                onPress={onNext}
            >
                <Text
                    fontSize={FONT_SIZE.md}
                >Bạn quên mật khẩu?</Text>
            </TouchableOpacity>
            <PrimaryButton
                text='Đăng nhập'
                style={{ shadowColor: '#0192FA' }}
                bgColor={COLOR.lightBlue}
                onPress={onConfirm}
                center
            />
            <View style={styles.orContainer}>
                <View
                    style={styles.line}
                />
                <Text fontSize={FONT_SIZE.md}>Hoặc</Text>
                <View
                    style={styles.line}
                />
            </View>
            <View style={styles.socialContainer}>
                <SocialButton image={IMAGE.google} onPress={onNext} />
                <SocialButton image={IMAGE.facebook} onPress={onNext} />
                <SocialButton image={IMAGE.apple} onPress={onNext} />
            </View>
            <View style={styles.signinNow}>
                <Text fontSize={FONT_SIZE.md} semibold>Bạn chưa có tài khoản? </Text>
                <TouchableOpacity
                    onPress={() => navigate('SignUpScreen')}
                >
                    <Text
                        fontSize={FONT_SIZE.md}
                        color={COLOR.blue}
                        semibold
                    >Đăng kí ngay</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
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