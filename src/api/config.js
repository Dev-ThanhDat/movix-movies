import axios from './axios-custome';

export const apiGetUpcomingMovie = () => {
  return axios.get('/movie/upcoming');
};

export const apiGetTrending = (params) => {
  return axios.get(`/trending/all/${params}`);
};

export const apiGetPopular = (params) => {
  return axios.get(`/${params}/popular`);
};

export const apiGetTopRated = (params) => {
  return axios.get(`/${params}/top_rated`);
};

export const apiGetDetails = (mediaType, id) => {
  return axios.get(`/${mediaType}/${id}`);
};

export const apiGetCredits = (mediaType, id) => {
  return axios.get(`/${mediaType}/${id}/credits`);
};

export const apiGetVideos = (mediaType, id) => {
  return axios.get(`/${mediaType}/${id}/videos`);
};

export const apiGetSimilar = (mediaType, id) => {
  return axios.get(`/${mediaType}/${id}/similar`);
};

export const apiGetRecommendations = (mediaType, id) => {
  return axios.get(`/${mediaType}/${id}/recommendations`);
};

export const apiGetSearch = (query, page) => {
  return axios.get(`/search/multi?query=${query}&page=${page}`);
};

export const apiGetDiscover = (mediaType, page) => {
  return axios.get(`/discover/${mediaType}?page=${page}`);
};
