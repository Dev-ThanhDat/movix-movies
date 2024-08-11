import { createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAsync';

const initialState = {
  videosData: null,
  isLoading: false
};

export const videosSlice = createSlice({
  name: 'Videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videosData = action.payload;
    });
    builder.addCase(getVideos.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default videosSlice.reducer;
