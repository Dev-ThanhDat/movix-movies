import { createSlice } from '@reduxjs/toolkit';
import { getSearch } from './searchAsync';

const initialState = {
  searchData: null,
  isLoading: false
};

export const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchData = action.payload;
    });
    builder.addCase(getSearch.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default searchSlice.reducer;
