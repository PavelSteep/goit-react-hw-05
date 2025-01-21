import { Link } from 'react-router-dom';
import css from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
};

export default MovieItem;
