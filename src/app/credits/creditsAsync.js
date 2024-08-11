import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetCredits } from '~/api/config';

export const getCredits = createAsyncThunk(
  'Credits/getCredits',
  async ({ mediaType, id }) => {
    const response = await apiGetCredits(mediaType, id);
    return response;
  }
);
