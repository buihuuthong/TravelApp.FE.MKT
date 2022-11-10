import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

const Alert = (props) => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  const { title, description, cancelText, confirmText, onCancel, onConfirm, theme } =
    params || props;
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.headerModal}>
          {!!title && (
            <Text
              color={theme === 'pink' ? COLOR.primaryPink : undefined}
              style={styles.marginTop}
              semibold
              center
              fontSize={theme === 'pink' ? FONT_SIZE.h2 : FONT_SIZE.h4}
            >
              {title}
            </Text>
          )}
          {description ? (
            <Text style={styles.marginTop} center fontSize={FONT_SIZE.md}>
              {description}
            </Text>
          ) : null}
        </View>
        <View style={styles.bottomButtonView}>
          <TouchableOpacity
            onPress={() => {
              goBack();
              onCancel &&
                setTimeout(() => {
                  onCancel();
                }, 600);
            }}
            style={[globalStyles.flex1]}
          >
            <Text color={COLOR.subText} fontSize={FONT_SIZE.md} center style={styles.cancel}>
              {cancelText ?? 'Quay lại'}
            </Text>
          </TouchableOpacity>
          {theme !== 'pink' && (
            <TouchableOpacity
              style={[globalStyles.flex1, styles.rightBorder]}
              onPress={() => {
                goBack();
                onConfirm &&
                  setTimeout(() => {
                    onConfirm();
                  }, 600);
              }}
            >
              <Text
                color={COLOR.blue}
                semibold
                fontSize={FONT_SIZE.md}
                center
                style={styles.cancel}
              >
                {confirmText ?? 'Xác nhận'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    width: '72%',
  },
  headerModal: {
    paddingBottom: 20,
    width: '80%',
  },
  bottomButtonView: {
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: COLOR.gray,
  },
  cancel: {
    padding: 12,
  },
  rightBorder: {
    borderLeftWidth: 1,
    borderColor: COLOR.gray,
  },
  marginTop: {
    marginTop: 20,
  },
});

export default Alert;
