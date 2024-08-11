import { createSlice } from '@reduxjs/toolkit';
import { getUpcomingMovie } from './upcomingMovieAsync';

const initialState = {
  upcomingBackdropData: null,
  isLoading: false
};

export const upcomingMovieSlice = createSlice({
  name: 'UpcomingMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUpcomingMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUpcomingMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.upcomingBackdropData =
        action.payload?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    });
    builder.addCase(getUpcomingMovie.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default upcomingMovieSlice.reducer;
