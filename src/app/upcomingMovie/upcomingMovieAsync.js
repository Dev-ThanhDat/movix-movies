import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetUpcomingMovie } from '~/api/config';

export const getUpcomingMovie = createAsyncThunk(
  'UpcomingMovie/getUpcomingMovie',
  async () => {
    const response = await apiGetUpcomingMovie();
    return response;
  }
);
