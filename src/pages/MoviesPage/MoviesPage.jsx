import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/api.js';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
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
    setQuery(e.target.value);
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
                state={{ from: location }}  // Если state не передаётся, можно будет обрабатывать эту информацию
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



// import { useState, useEffect } from 'react';
// import { fetchMovies } from '../../services/api.js';
// import { Link, useLocation } from 'react-router-dom';
// import css from './MoviesPage.module.css';

// const MoviesPage = () => {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);

//   const location = useLocation();

//   useEffect(() => {
//     if (!query) return;

//     const fetchMoviesData = async () => {
//       try {
//         const moviesData = await fetchMovies(query);
//         setMovies(moviesData.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMoviesData();
//   }, [query]);

//   const handleInputChange = e => {
//     setQuery(e.target.value);
//   };

//   return (
//     <main className={css.moviesContainer}>
//       <h1>Search Movies</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={handleInputChange}
//         placeholder="Enter movie name"
//       />
//       {movies.length > 0 ? (
//         <ul>
//           {movies.map(movie => (
//             <li key={movie.id}>
//               <Link
//                 to={`/movies/${movie.id}`}
//                 state={{ from: location }}
//               >
//                 {movie.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No movies found. Please try again.</p>
//       )}
//     </main>
//   );
// };

// export default MoviesPage;
