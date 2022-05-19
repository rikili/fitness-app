import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from './MinimaHeader.style';

function MinimalHeader() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logo} />
      <nav className={classes.nav}>
        <NavLink className={({ isActive }) => (isActive ? classes.activeLink : classes.links)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.activeLink : classes.links)} to="/workouts">
          Workouts
        </NavLink>
        <div className={classes.tempWeather} />
      </nav>
    </div>
  );
}

export default MinimalHeader;
