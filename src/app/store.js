import { configureStore } from '@reduxjs/toolkit';
import creditsSlice from './credits/creditsSlice';
import detailsSlice from './details/detailsSlice';
import discoverSlice from './discover/discoverSlice';
import popularSlice from './popular/popularSlice';
import recommendationsSlice from './recommendations/recommendationsSlice';
import searchSlice from './search/searchSlice';
import similarSlice from './similar/similarSlice';
import topRatedSlice from './topRated/topRatedSlice';
import trendingSlice from './trending/trendingSlice';
import upcomingMovieSlice from './upcomingMovie/upcomingMovieSlice';
import videosSlice from './videos/videosSlice';

export const store = configureStore({
  reducer: {
    upcomingReducer: upcomingMovieSlice,
    trendingReducer: trendingSlice,
    popularReducer: popularSlice,
    topRatedReducer: topRatedSlice,
    detailsReducer: detailsSlice,
    creditsReducer: creditsSlice,
    videosReducer: videosSlice,
    similarReducer: similarSlice,
    recommendationsReducer: recommendationsSlice,
    searchReducer: searchSlice,
    discoverReducer: discoverSlice
  }
});
