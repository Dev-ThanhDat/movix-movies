import { createSlice } from '@reduxjs/toolkit';
import { getTopRated } from './topRatedAsync';

const initialState = {
  topRatedData: null,
  isLoading: false
};

export const topRatedSlice = createSlice({
  name: 'TopRated',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopRated.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.isLoading = false;
      state.topRatedData = action.payload;
    });
    builder.addCase(getTopRated.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default topRatedSlice.reducer;
