import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetSearch } from '~/api/config';

export const getSearch = createAsyncThunk(
  'Search/getSearch',
  async ({ query, page }) => {
    const response = await apiGetSearch(query, page);
    return response;
  }
);
