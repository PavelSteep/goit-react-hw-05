import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async values => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=a92a90cf1d40bbb51d3728ffff214a17`, 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        navigate("/profile", { replace: true });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={css['login-container']}>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
