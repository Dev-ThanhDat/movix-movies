import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetTrending } from '~/api/config';

export const getTrending = createAsyncThunk(
  'Trending/getTrending',
  async (params) => {
    const response = await apiGetTrending(params);
    return response;
  }
);
