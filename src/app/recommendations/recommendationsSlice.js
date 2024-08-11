import { createSlice } from '@reduxjs/toolkit';
import { getRecommendations } from './recommendationsAsync';

const initialState = {
  recommendationsData: null,
  isLoading: false
};

export const recommendationsSlice = createSlice({
  name: 'Recommendations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecommendations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recommendationsData = action.payload;
    });
    builder.addCase(getRecommendations.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default recommendationsSlice.reducer;
