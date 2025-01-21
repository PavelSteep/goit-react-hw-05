import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/api'; // Импортируем функцию для работы с API
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]); // состояние для хранения информации о составе актеров
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchData(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {}); // Получаем информацию о составе
        setCast(data.cast); // сохраняем данные о составе актеров
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // завершили загрузку
      }
    };

    fetchCast();
  }, [movieId]); // хук с зависимостью от movieId

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css.castContainer}>
      <h2>Movie Cast Information</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li> // выводим список актеров
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
