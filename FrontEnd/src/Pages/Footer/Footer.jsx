import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Fiesta Informatique. Tous droits réservés.</p>
      <ul className="footer-links">
        <li><Link to="/politique">Politique de confidentialité</Link></li>
        <li><Link to="/conditions">Conditions d'utilisation</Link></li>
        <li><Link to="/aide">Aide</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;