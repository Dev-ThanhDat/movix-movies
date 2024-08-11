import { createSlice } from '@reduxjs/toolkit';
import { getDiscover } from './discoverAsync';

const initialState = {
  discoverData: null,
  isLoading: false
};

export const discoverSlice = createSlice({
  name: 'Discover',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiscover.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDiscover.fulfilled, (state, action) => {
      state.isLoading = false;
      state.discoverData = action.payload;
    });
    builder.addCase(getDiscover.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default discoverSlice.reducer;
