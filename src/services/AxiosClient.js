// import axios from 'axios';
// import auth from '@react-native-firebase/auth';
// const API_ENDPOINT = 'https://api.project/';

// const AxiosClient = axios.create({
//   baseURL: API_ENDPOINT,
//   responseType: 'json',
//   timeout: 50000,
// });

// AxiosClient.interceptors.request.use(
//   async (config) => {
//     const newConfig = config;
//     let token = null;
//     try {
//       token = await auth()?.currentUser?.getIdToken();
//     } catch {}
//     if (token) {
//       newConfig.headers.Authorization = `Bearer ${token}`;
//     }

//     return newConfig;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
// AxiosClient.interceptors.response.use(
//   function (response) {
//     return response.data ?? response;
//   },
//   function (error) {
//     console.log('error', error.response);
//     return Promise.reject(error);
//   },
// );

export default AxiosClient;
