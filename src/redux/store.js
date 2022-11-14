import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthSlice from './AuthSlice';
import UserSlice from './UserSlice';
import TourSlice from './TourSlice';
import BookTourSlice from './BookTourSlice';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const combinedReducers = combineReducers({
  auth: AuthSlice,
  user: UserSlice,
  tour: TourSlice,
  bookTour: BookTourSlice,
});

const rootReducer = persistReducer(
  {
    key: 'rootReducerConfig',
    storage: AsyncStorage,
    whitelist: ['auth', 'user', 'tour', 'bookTour'],
    stateReconciler: hardSet,
  },
  combinedReducers,
);
const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
];
const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
export const persistor = persistStore(store);

export default store;
