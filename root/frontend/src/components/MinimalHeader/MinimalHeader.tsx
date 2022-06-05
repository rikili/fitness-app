import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from './MinimaHeader.style';
import Weather from '../Weather/Weather';

function MinimalHeader() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logo} />
      <nav className={classes.nav}>
        <NavLink className={({ isActive }) => (isActive ? classes.activeLink : classes.links)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.activeLink : classes.links)} to="/workouts">
          Workouts
        </NavLink>
        <Weather />
      </nav>
    </header>
  );
}

export default MinimalHeader;
