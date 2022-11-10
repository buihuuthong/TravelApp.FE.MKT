import axios from 'axios';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const API_ENDPOINT = 'http://192.168.1.16:8080/api/';

const AxiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: 'json',
  timeout: 50000,
});

AxiosClient.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    try {
      firestore()
        .collection('accessToken')
        .doc(auth()?.currentUser?.uid)
        .onSnapshot(documentSnapshot => {
          newConfig.headers.Authorization = `Bearer ${documentSnapshot?.data()?.token}`;
        });
    } catch{}
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);
AxiosClient.interceptors.response.use(
  function (response) {
    return response.data ?? response;
  },
  function (error) {
    console.log('error', error.response);
    return Promise.reject(error);
  },
);

export default AxiosClient;
