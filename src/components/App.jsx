import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';
import LazyLoader from '../components/LazyLoader/LazyLoader';
import './App.module.css'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('../pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../pages/MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<LazyLoader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
};

export default App;
