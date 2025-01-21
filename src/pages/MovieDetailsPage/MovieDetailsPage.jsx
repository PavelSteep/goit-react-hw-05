import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMovieById } from "../../services/api.js";
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkURL = location.state?.from || '/movies';

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading movie details...</div>;
  }

  const { title, overview, release_date, vote_average } = movieDetails;

  return (
    <div className={css.detailsContainer}>
      <Link to={backLinkURL} className={css.backButton}>
        ← Go back
      </Link>
      <h1>{title}</h1>
      <p><strong>Overview:</strong> {overview}</p>
      <p><strong>Release Date:</strong> {release_date}</p>
      <p><strong>Rating:</strong> {vote_average}</p>

      <nav className={css.detailsNav}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
