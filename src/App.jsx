import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasculinoPage from './Pages/MasculinoPage/MasculinoPage';
import FemeninoPage from './Pages/FemeninoPage/FemeninoPage';
import HomePage from './Pages/HomePage/HomePage';
import AcercaPage from './Pages/AcercaDePage/AcercaDePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/masculino" element={<MasculinoPage />} />
        <Route path="/femenino" element={<FemeninoPage />} />
        <Route path="/acerca" element={<AcercaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
