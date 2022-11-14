import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookTourInfo: {},
};

const bookTourSlice = createSlice({
  name: 'bookTour',
  initialState,
  reducers: {
    setTourInfo(state, { payload }) {
      state.bookTourInfo = payload;
    },
},
});

export const bookTourInfoSelector = (state) => state.bookTour.bookTourInfo;

export const {
  setBookTourInfo,
} = bookTourSlice.actions;

export default bookTourSlice.reducer;
