import React from 'react';
import Header from './components/header/Header';
import Index from './pages/Index';
import Store from './pages/Store';
import Ladder from './Ladder_gm/LadderGame';
import PowerBall from './powerball/src/AppPOWER';
import Dpe from './달팽이/dpe';
import { Route, Routes, Navigate } from 'react-router-dom';

import './css/App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/snail" element={<Dpe />} />
        <Route path="/Ladder" element={<Ladder />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Powerball" element={<PowerBall />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
