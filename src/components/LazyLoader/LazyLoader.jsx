import React from 'react';
import css from './LazyLoader.module.css';

const LazyLoader = () => {
  return (
    <div className={css.loaderWrapper}>
      <div className={css.loader}></div>
      <p className={css.text}>Loading...</p>
    </div>
  );
};

export default LazyLoader;
