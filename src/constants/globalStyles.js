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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sbFlexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexCol: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  sbFlexCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default globalStyles;
