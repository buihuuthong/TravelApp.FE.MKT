import FONT_SIZE from '@constants/fontSize'
import globalStyles from '@constants/globalStyles'
import IMAGE from '@constants/image'
import { Modal as ReactModal, StatusBar, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import ImageLocal from './ImageLocal'
import Text from './Text'

export const Modal = ({ children, visible, onRequestClose }) => {
    return (
        <ReactModal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <StatusBar backgroundColor="rgba(52, 52, 52, 0.5)" />
            <TouchableOpacity onPressOut={onRequestClose} style={styles.centeredView}>
                <TouchableWithoutFeedback>
                    <View style={styles.modalView}>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </ReactModal>
    )
}

export const ModalSuccess = ({ visible, onRequestClose }) => {
    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <ImageLocal image={IMAGE.tick}
            />
            <View style={globalStyles.center}>
                <Text fontSize={FONT_SIZE.h3} semibold >Thành công</Text>
                <Text fontSize={FONT_SIZE.lg}>
                    Cảm ơn bạn đã sử dụng dịch vụ.
                </Text>
                <Text fontSize={FONT_SIZE.default}> Vui lòng kiểm tra lại Gmail.</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    modalView: {
        margin: 16,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 28,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})