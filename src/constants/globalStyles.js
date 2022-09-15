import COLOR from './color';

const { StyleSheet } = require('react-native');

const globalStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: COLOR.lightGray,
  },
  darkBorderBottom: {
    borderBottomWidth: 1,
    borderColor: COLOR.gray,
  },
  modalContainer: {
    backgroundColor: COLOR.modal,
    flex: 1,
  },
});

export default globalStyles;
