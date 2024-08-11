import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetPopular } from '~/api/config';

export const getPopular = createAsyncThunk(
  'Popular/getPopular',
  async (params) => {
    const response = await apiGetPopular(params);
    return response;
  }
);
