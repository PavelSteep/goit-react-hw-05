import { useLocation } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  console.log(location);

  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
