import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* Rota da página inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rota da Política de Privacidade */}
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        
        {/* Rota de fallback para 404 */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
