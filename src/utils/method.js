// import auth from '@react-native-firebase/auth';

// export const getPreviousScreen = (getState) => {
//   try {
//     const routes = getState()?.routes;
//     const prevRoute = routes[routes.length - 2];
//     return prevRoute?.name ?? null;
//   } catch (error) {
//     return null;
//   }
// };

// export const _id = (obj) => obj?._id;

// export const isSameValue = (arr1, arr2) => {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   return arr1.reduce((result, cur) => result && arr2.includes(cur), true);
// };

// export const getTotal = ({ quantity = 0, size, topping = {}, price = 0 }) => {
//   return (
//     price * quantity +
//     (size?.price ?? 0) +
//     Object.values(topping).reduce(
//       (total, value) => total + (value.price ?? 0) * (value.quantity ?? 0),
//       0,
//     )
//   );
// };

// export const isLogin = () => {
//   return !!auth().currentUser;
// };

// export const convertMetToKm = (met) => {
//   let km = met / 1000;
//   return km.toFixed(km < 1 ? 1 : 0);
// };

// export const toPrice = (price) => {
//   if (!price && price !== 0) {
//     return '';
//   }
//   return Math.round(parseFloat(price?.toString()?.replace(/[^0-9]/g, '')))
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// };
