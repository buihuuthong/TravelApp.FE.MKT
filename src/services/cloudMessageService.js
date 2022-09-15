// import messaging from '@react-native-firebase/messaging';

// const configure = async () => {
//   messaging()
//     .getInitialNotification()
//     .then((remoteMessage) => {
//       // alert.warning('on init'+ JSON.stringify(remoteMessage))
//       console.log('REMOTE_NOTIFICATION -getInitialNotification', remoteMessage);
//       // _onPressedNotification(navigation, remoteMessage);
//     });
//   const authStatus = await messaging().hasPermission();
//   if (authStatus !== messaging.AuthorizationStatus.AUTHORIZED) {
//     await messaging().requestPermission();
//   }
//   messaging().onNotificationOpenedApp((remoteMessage) => {
//     console.log('REMOTE_NOTIFICATION -onNotificationOpenedApp', remoteMessage);
//   });
//   messaging().onMessage((remoteMessage) => {
//     console.log('REMOTE_NOTIFICATION -onMessage', remoteMessage);
//   });
//   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//     console.log('REMOTE_NOTIFICATION -setBackgroundMessageHandler', remoteMessage);
//   });
// };
// const getTokenAsync = async () => {
//   const authStatus = await messaging().hasPermission();
//   if (authStatus !== messaging.AuthorizationStatus.AUTHORIZED) {
//     await messaging().requestPermission();
//   }
//   try {
//     const token = await messaging().getToken();
//     return token;
//   } catch (err) {
//     console.log('loi get token', err);
//     return '';
//   }
// };
// const CloudMessageService = {
//   configure,
//   getTokenAsync,
// };
// export default CloudMessageService;
