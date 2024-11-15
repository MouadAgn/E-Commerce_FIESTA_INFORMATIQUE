import React from 'react';
import { Link } from 'react-router-dom'; // Utilisez Link au lieu de <a>
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {  
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Fiesta Informatique Logo" />
        </Link>
      </div>
      <nav className="navbar-links">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/produits">Produits</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/panier">Panier</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;