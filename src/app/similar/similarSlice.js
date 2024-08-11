import { createSlice } from '@reduxjs/toolkit';
import { getSimilar } from './similarAsync';

const initialState = {
  similarData: null,
  isLoading: false
};

export const similarSlice = createSlice({
  name: 'Similar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSimilar.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSimilar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.similarData = action.payload;
    });
    builder.addCase(getSimilar.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default similarSlice.reducer;
