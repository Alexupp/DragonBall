import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import MasculinoPage from './Pages/MasculinoPage/MasculinoPage';
import FemeninoPage from './Pages/FemeninoPage/FemeninoPage';
import AcercaPage from './Pages/AcercaDePage/AcercaDePage';
import PersonajePage from './Pages/PersonajePage/PersonajePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/masculino" element={<MasculinoPage />} />
        <Route path="/femenino" element={<FemeninoPage />} />
        <Route path="/acerca" element={<AcercaPage />} />
        <Route path="/personaje/:id" element={<PersonajePage />} />
      </Routes>
    </Router>
  );
}

export default App;
