import { createSlice } from '@reduxjs/toolkit';
import { getPopular } from './popularAsync';

const initialState = {
  popularData: null,
  isLoading: false
};

export const popularSlice = createSlice({
  name: 'Popular',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.isLoading = false;
      state.popularData = action.payload;
    });
    builder.addCase(getPopular.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default popularSlice.reducer;
