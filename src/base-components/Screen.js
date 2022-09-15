// import COLOR from '@constants/color';
// import { deviceHeight, keyboardBehavior } from '@constants/dimension';
// import FONT_SIZE from '@constants/fontSize';
// import globalStyles from '@constants/globalStyles';
// import IMAGE from '@constants/image';
// import { useNavigation } from '@react-navigation/core';
// import React, { useEffect, useMemo } from 'react';
// import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, View } from 'react-native';
// import Animated, {
//   Easing,
//   runOnJS,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import ImageLocal from './ImageLocal';
// import Text from './Text';

// export const ModalWapper = ({
//   children,
//   title = 'Không tên',
//   contentHeight = deviceHeight / 2,
//   contentStyle,
// }) => {
//   const { goBack } = useNavigation();
//   const height = useSharedValue(0);

//   useEffect(() => {
//     height.value = withTiming(contentHeight, {
//       duration: 400,
//       easing: Easing.out(Easing.exp),
//     });
//   }, []);

//   const onClose = () => {
//     height.value = withTiming(
//       0,
//       {
//         duration: 200,
//         easing: Easing.out(Easing.exp),
//       },
//       () => {
//         runOnJS(goBack)();
//       },
//     );
//   };

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       height: height.value,
//     };
//   });

//   return (
//     <KeyboardAvoidingView behavior={keyboardBehavior} style={[styles.modalContainer]}>
//       <Pressable onPress={onClose} style={globalStyles.flex1} />
//       <Animated.View style={[animatedStyles, { height: contentHeight }]}>
//         <View style={[styles.contentView]} onPress={() => {}}>
//           <View style={styles.header}>
//             <View style={styles.close} />
//             <Text center flex semibold fontSize={FONT_SIZE.h4}>
//               {title}
//             </Text>
//             <ImageLocal onPress={onClose} style={styles.close} image={IMAGE.closeCircle} />
//           </View>
//           <View style={[globalStyles.flex1, contentStyle]}>{children}</View>
//         </View>
//       </Animated.View>
//     </KeyboardAvoidingView>
//   );
// };

// const Screen = ({
//   children,
//   white,
//   transparent,
//   noSafe,
//   noPad,
//   bottom,
//   backgroundColor = COLOR.lightGray,
// }) => {
//   const Wapper = useMemo(() => (noSafe ? View : SafeAreaView), [noSafe]);
//   return (
//     <Wapper
//       edges={bottom ? ['bottom'] : undefined}
//       style={[
//         styles.container,
//         {
//           backgroundColor: white ? COLOR.white : transparent ? 'transparent' : backgroundColor,
//           padding: noPad ? 0 : 16,
//         },
//       ]}
//     >
//       <KeyboardAvoidingView style={globalStyles.flex1} behavior={keyboardBehavior}>
//         {children}
//       </KeyboardAvoidingView>
//     </Wapper>
//   );
// };
// export default Screen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   modalContainer: {
//     flex: 1,
//     // height: deviceHeight,
//     backgroundColor: '#00000088',
//     justifyContent: 'flex-end',
//   },
//   contentView: {
//     backgroundColor: COLOR.white,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//     paddingTop: 16,
//     height: '100%',
//   },
//   header: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     paddingBottom: 12,
//     borderColor: COLOR.gray,
//     paddingHorizontal: 16,
//   },
//   close: {
//     width: 30,
//     height: 30,
//   },
// });
