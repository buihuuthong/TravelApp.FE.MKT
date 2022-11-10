import { Modal as ReactModal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

const Modal = ({ children, visible, onRequestClose }) => {

    return (
        <ReactModal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
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

export default Modal

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