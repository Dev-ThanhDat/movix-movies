import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetRecommendations } from '~/api/config';

export const getRecommendations = createAsyncThunk(
  'Recommendations/getRecommendations',
  async ({ mediaType, id }) => {
    const response = await apiGetRecommendations(mediaType, id);
    return response;
  }
);
