import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetDiscover } from '~/api/config';

export const getDiscover = createAsyncThunk(
  'Discover/getDiscover',
  async ({ mediaType, page }) => {
    const response = await apiGetDiscover(mediaType, page);
    return response;
  }
);
