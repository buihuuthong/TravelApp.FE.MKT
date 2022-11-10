import { ActivityIndicator, StyleSheet, View } from 'react-native';
import COLOR from '../constants/color';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wapper}>
        <ActivityIndicator size="large" color={COLOR.subText} />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000088',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wapper: {
    borderRadius: 8,
    backgroundColor: '#ffffffcc',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
