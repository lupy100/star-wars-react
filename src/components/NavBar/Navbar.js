import React from 'react';
import { Link } from 'react-router-dom';
import LogoStarWars from '../../components/Logo/LogoStarWars';
import './styles/Navbar.scss'

function Navbar() {
  return (
    <div className="Navbar">
    <Link to="/">
        <LogoStarWars />
    </Link>
    <ul className="Navbar-list">
      <li className="Navbar-list-item">
        <Link to="/people">Personagens</Link>
      </li>

      <li className="Navbar-list-item">
        <Link to="/planet">Planetas</Link>
      </li>
    </ul>
  </div>
  );
}

export default Navbar;