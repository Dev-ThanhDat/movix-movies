import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetTopRated } from '~/api/config';

export const getTopRated = createAsyncThunk(
  'TopRated/getTopRated',
  async (params) => {
    const response = await apiGetTopRated(params);
    return response;
  }
);
