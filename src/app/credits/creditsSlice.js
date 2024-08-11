import { createSlice } from '@reduxjs/toolkit';
import { getCredits } from './creditsAsync';

const initialState = {
  creditsData: null,
  isLoading: false
};

export const creditsSlice = createSlice({
  name: 'Credits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCredits.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCredits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.creditsData = action.payload;
    });
    builder.addCase(getCredits.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default creditsSlice.reducer;
