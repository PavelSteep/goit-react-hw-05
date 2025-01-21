import React, { useState } from 'react';
import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const [values, setValues] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.username || !values.password) {
      setError('Both fields are required!');
    } else {
      setError('');
      onSubmit(values); // Отправляем данные формы
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h2 className={css.title}>Login</h2>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
        className={css.input}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
        className={css.input}
      />
      {error && <div className={css.error}>{error}</div>}
      <button type="submit" className={css.button}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
