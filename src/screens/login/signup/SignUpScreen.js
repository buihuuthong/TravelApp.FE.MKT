import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import ImageLocal from '@base-components/ImageLocal';
import IMAGE from '@constants/image';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import { PrimaryButton, SocialButton } from '@base-components/Buttons';
import { LoginHeader } from '@base-components/Headers';
import { NormalInput } from '@base-components/Input';

const SignUpScreen = () => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <LoginHeader
                title="Đăng ký,"
                description={"Tham gia cùng My Tour và \n bắt đầu những chuyến đi của bạn!"}
            />
            <View style={styles.inputContainer}>
                <NormalInput
                    placeholder="Họ và tên"
                />
                <NormalInput
                    placeholder="Tài khoản"
                />
                <NormalInput
                    placeholder="Email"
                />
                <NormalInput
                    placeholder="Mật khẩu"
                />
                <NormalInput
                    placeholder="Xác nhận mật khẩu"
                />
            </View>
            <PrimaryButton
                text='Đăng ký'
                style={{ shadowColor: '#0192FA', top: 10 }}
                bgColor={COLOR.lightBlue}
                onPress={{}}
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
                <SocialButton image={IMAGE.google} />
                <SocialButton image={IMAGE.facebook} />
                <SocialButton image={IMAGE.apple} />
            </View>
            <View style={styles.signinNow}>
                <Text fontSize={FONT_SIZE.md} semibold>Bạn đã có tài khoản? </Text>
                <TouchableOpacity
                    onPress={() => navigate('SignInScreen')}
                >
                    <Text
                        fontSize={FONT_SIZE.md}
                        color={COLOR.blue}
                        semibold
                    >Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
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