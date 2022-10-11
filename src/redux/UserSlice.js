import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '@services/login';
import { getTotal, isSameValue, _id } from '@utils/method';

const initialState = {
  userInfo: {},
};

export const getUserInfo = createAsyncThunk('user/getUserInfo', async () => {
  const response = await api.getUserInfo();
  return { ...response, phone: response?.phone?.replace('+840', '0').replace('+84', '0') };
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, { payload }) {
      state.userInfo = payload;
    },

},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
      // Add user to the state array
      state.userInfo = payload;
    });
  },
});

export const userInfoSelector = (state) => state.user.userInfo;

export const {
  setUserInfo,
} = userSlice.actions;

export default userSlice.reducer;
