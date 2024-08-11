import { createSlice } from '@reduxjs/toolkit';
import { getDetails } from './detailsAsync';

const initialState = {
  detailsData: null,
  isLoading: false
};

export const detailsSlice = createSlice({
  name: 'Details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detailsData = action.payload;
    });
    builder.addCase(getDetails.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default detailsSlice.reducer;
