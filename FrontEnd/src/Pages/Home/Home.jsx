// Home.jsx
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Home.css'; // N'oubliez pas de créer ce fichier CSS

const Home = () => {
  console.log("Le composant Home est monté");
  return (
    <div className="page-container">
      <NavBar />
      <main className="main-content">
        <h1 className="welcome-title">Bienvenue sur notre site e-commerce !</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;