import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
};

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
  try {
    // const resLogin = await login(username, password);
    // await setToken(resLogin.data.access_token);
    // const user = await getUser();
    // return user.data;
  } catch (error) {
    throw new Error('fetchLoginStatus -- error', error);
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  //   reducers: {
  //     logout(state) {
  //       Notiflix.Notify.success("Đăng xuất thành công");
  //       return {
  //         ...state,
  //         user: null,
  //       };
  //     },
  //   },
  extraReducers: {
    [login.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [login.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      user: { ...action.payload },
    }),
    [login.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    // [getUserInformation.fulfilled]: (state, action) => ({
    //   ...state,
    //   user: { ...action.payload },
    //   isLoading: false,
    // }),
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
