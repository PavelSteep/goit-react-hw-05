import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/api.js';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || ''; // Получаем параметр query из URL
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    const fetchMoviesData = async () => {
      try {
        const moviesData = await fetchMovies(query);
        setMovies(moviesData.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesData();
  }, [query]);

  const handleInputChange = e => {
    setSearchParams({ query: e.target.value }); // Обновляем URL-параметр при изменении ввода
  };

  return (
    <main className={css.moviesContainer}>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter movie name"
      />
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found. Please try again.</p>
      )}
    </main>
  );
};

export default MoviesPage;
