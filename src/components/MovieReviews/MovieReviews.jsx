import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/api'; // Импортируем функцию для работы с API

const MovieReviews = () => {
  const { movieId } = useParams(); // Получаем параметр из URL
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchData(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {}); // Получаем отзывы
        setReviews(data.results); // сохраняем данные об отзывах
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Movie Reviews {movieId}</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.content}</li> // выводим содержание отзыва
          ))}
        </ul>
      ) : (
        <p>No Reviews.</p>
      )}
    </div>
  );
};

export default MovieReviews;
