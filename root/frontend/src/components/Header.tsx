import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFileText } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to="/">
          <BsFileText size={25} />
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to="/workouts">
          <FaRegCalendarAlt size={25} />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
