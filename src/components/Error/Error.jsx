import React from 'react';
import css from './Error.module.css';

const Error = () => {
  return (
    <div className={css.errorWrapper}>
      <h2 className={css.errorMessage}>Something went wrong!</h2>
    </div>
  );
};

export default Error;
