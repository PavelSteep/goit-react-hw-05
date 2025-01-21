import axios from 'axios';
const API_KEY = 'a92a90cf1d40bbb51d3728ffff214a17';
const BASE_URL = 'https://api.themoviedb.org/3';

// Функция для обработки API-запросов
export const fetchData = async (url, params) => {
  try {
    const response = await axios.get(url, { params: { api_key: API_KEY, ...params } });
    return response.data;
  } catch (error) {
    console.error("API request failed:", error.message);
    throw error;
  }
};

// Функция для поиска фильмов по запросу
export const fetchMovies = async (query) => {
  return await fetchData(`${BASE_URL}/search/movie`, { query });
};

// Функция для получения данных фильма по ID
export const getMovieById = async (id) => {
  return await fetchData(`${BASE_URL}/movie/${id}`, {});
};
