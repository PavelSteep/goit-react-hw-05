import React from 'react';
import axios from 'axios';
import css from './api.module.css';

const API_KEY = 'a92a90cf1d40bbb51d3728ffff214a17';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async query => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};
