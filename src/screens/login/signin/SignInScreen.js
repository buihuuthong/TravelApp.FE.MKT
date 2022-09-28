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

const SignInScreen = () => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <LoginHeader
                title="Xin chào,"
                description="Hãy cùng bắt đầu hành trình của bạn nào!"
            />
            <View style={styles.inputContainer}>
                <NormalInput
                    placeholder="Email, số điện thoại hoặc tài khoản"
                />
                <NormalInput
                    placeholder="Mật khẩu"
                />
            </View>
            <TouchableOpacity
                style={{ alignItems: 'flex-end', padding: 10 }}
                onPress={{}}
            >
                <Text
                    fontSize={FONT_SIZE.md}
                >Bạn quên mật khẩu?</Text>
            </TouchableOpacity>
            <PrimaryButton
                text='Đăng nhập'
                style={{ shadowColor: '#0192FA' }}
                bgColor={COLOR.lightBlue}
                onPress={() => navigate('SuccessScreen')}
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
        </View>
    )
}

export default SignInScreen;

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