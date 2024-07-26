import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Snail from "./pages/Snail";
import Ladder from "./pages/Ladder";
import PowerBall from "./pages/PowerBall";
import LossWarning from "./components/LossWarning/LossWarning";
import InstallPWA from "./components/PWA/InstallPWA.jsx";
import "./css/index.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [lostCount, setLostCount] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 30000) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const storedMoney = parseInt(localStorage.getItem("userAssets"));
    if (storedMoney < 0) {
      setLostCount((prevCount) => prevCount + 1);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (lostCount > 0 && lostCount % 3 === 0) {
      setShowModal(true);
    }
  }, [lostCount]);

  return (
    <>
      {showModal && <LossWarning onClose={handleCloseModal} />}
      <InstallPWA />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/snail" element={<Snail />} />
        <Route path="/ladder" element={<Ladder />} />
        <Route path="/powerball" element={<PowerBall />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
