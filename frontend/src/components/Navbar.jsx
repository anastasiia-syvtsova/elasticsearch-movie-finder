import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 MovieWorld</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/top">Top Movies</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;