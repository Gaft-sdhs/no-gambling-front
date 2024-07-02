// src/App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Index from "./pages/Index";
import Snail from "./pages/Snail";
import Ladder from "./pages/Ladder";
import PowerBall from "./pages/PowerBall";
import MobileWarning from "../src/components/MobileWarning/MobileWarning.jsx";
import "./css/index.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1024) { // 모바일 화면 크기 예시로 1024px 이하로 설정
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {showModal && <MobileWarning />}
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/snail" element={<Snail />} />
        <Route path="/Ladder" element={<Ladder />} />
        <Route path="/Powerball" element={<PowerBall />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
