import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'; // Vérifiez le chemin d'importation
import NavBar from './Pages/NavBar/NavBar'; // Si nécessaire
import Footer from './Pages/Footer/Footer'; // Si nécessaire

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* D'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
