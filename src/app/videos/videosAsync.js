import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetVideos } from '~/api/config';

export const getVideos = createAsyncThunk(
  'Videos/getVideos',
  async ({ mediaType, id }) => {
    const response = await apiGetVideos(mediaType, id);
    return response;
  }
);
