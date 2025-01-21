import React from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import clsx from 'clsx';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  
  const Navigation = () => {
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
        // alert('Error during login. Please try again.');
      }
    };
  
    return (
      <div>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
        <div className={css['login-container']}>
          <h1>Login page</h1>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    );
  };
  

export default Navigation;
