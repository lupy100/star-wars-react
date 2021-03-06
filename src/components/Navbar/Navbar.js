import React from 'react';
import { Link } from 'react-router-dom';
import LogoStarWars from '../../components/Logo';
import './styles/Navbar.scss'

function Navbar() {
  return (
    <div className="Navbar">
    <Link to="/star-wars-react/">
        <LogoStarWars />
    </Link>
    <ul className="Navbar-list">
      <li className="Navbar-list-item">
        <Link to="/star-wars-react/people">Characters</Link>
      </li>

      <li className="Navbar-list-item">
        <Link to="/star-wars-react/planet">Planets</Link>
      </li>
    </ul>
  </div>
  );
}

export default Navbar;