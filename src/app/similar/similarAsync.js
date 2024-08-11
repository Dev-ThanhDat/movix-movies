import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetSimilar } from '~/api/config';

export const getSimilar = createAsyncThunk(
  'Similar/getSimilar',
  async ({ mediaType, id }) => {
    const response = await apiGetSimilar(mediaType, id);
    return response;
  }
);
