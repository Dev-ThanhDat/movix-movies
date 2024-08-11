import { createSlice } from '@reduxjs/toolkit';
import { getTrending } from './trendingAsync';

const initialState = {
  trendingData: null,
  isLoading: false
};

export const trendingSlice = createSlice({
  name: 'Trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrending.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTrending.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trendingData = action.payload;
    });
    builder.addCase(getTrending.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default trendingSlice.reducer;
