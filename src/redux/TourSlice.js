import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tourInfo: {},
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setTourInfo(state, { payload }) {
      state.tourInfo = payload;
    },
},
});

export const tourInfoSelector = (state) => state.tour.tourInfo;

export const {
  setTourInfo,
} = tourSlice.actions;

export default tourSlice.reducer;
