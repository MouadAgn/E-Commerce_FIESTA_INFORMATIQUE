import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'; // Vérifiez le chemin d'importation

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
