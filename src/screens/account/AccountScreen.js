import { StyleSheet, View } from 'react-native';
import Avatar from './components/Avatar';
import Menu from './components/Menu';

const AccountScreen = () => {

  return (
    <View style={styles.container}>
      <Avatar/>
      <Menu/>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
