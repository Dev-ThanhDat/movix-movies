import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetDetails } from '~/api/config';

export const getDetails = createAsyncThunk(
  'Details/getDetails',
  async ({ mediaType, id }) => {
    const response = await apiGetDetails(mediaType, id);
    return response;
  }
);
