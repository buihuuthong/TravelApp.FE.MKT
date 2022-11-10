import ImageLocal from '@base-components/ImageLocal';
import { NormalScreen } from '@base-components/Screen';
import Text from '@base-components/Text';
import COLOR from '@constants/color';
import FONTSIZE from '@constants/fontSize';
import globalStyles from '@constants/globalStyles';
import IMAGE from '@constants/image';
import { StyleSheet, View } from 'react-native';

const BookmarkScreen = () => {

  return (
    <NormalScreen>
    <View style={[styles.container, globalStyles.flexCol]}>
      <ImageLocal image={IMAGE.development} />
      <Text fontSize={FONTSIZE.h2} color={COLOR.blue}>
        Coming Soon!
      </Text>
    </View>
    </NormalScreen>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
