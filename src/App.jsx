import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFoundPage from './Pages/notfoundpage/notfoundpage';
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
        <Route path="/masculino/*" element={<NotFoundPage />} /> {/* Para rutas mal escritas dentro de /masculino */}
        <Route path="/femenino" element={<FemeninoPage />} />
        <Route path="/femenino/*" element={<NotFoundPage />} />
        <Route path="/acerca" element={<AcercaPage />} />
        <Route path="/personaje/:id" element={<PersonajePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all final */}
      </Routes>
    </Router>
  );
}

export default App;
