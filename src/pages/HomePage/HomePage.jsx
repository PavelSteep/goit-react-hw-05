const HomePage = () => {
  return <h1>Welcome to Movie Finder</h1>;
};

export default HomePage;




// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import MovieList from '../../components/MovieList/MovieList';
// import css from './HomePage.module.css';

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
//           params: {
//             api_key: 'a92a90cf1d40bbb51d3728ffff214a17',
//           },
//         });
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchTrendingMovies();
//   }, []);

//   return (
//     <main>
//       <h1>Trending Movies</h1>
//       <MovieList movies={movies} />
//     </main>
//   );
// };

// export default HomePage;
