import { useState, useEffect, createContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Snail from "./pages/Snail";
import Ladder from "./pages/Ladder";
import PowerBall from "./pages/PowerBall";
import LossWarning from "./components/LossWarning/LossWarning"; // LossWarning 컴포넌트 추가
import "./css/index.css";

export const LostCountContext = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [lostCount, setLostCount] = useState(0); // 잃은 횟수 카운트

  // 로컬 스토리지에서 사용자 재산 데이터를 가져오기
  useEffect(() => {
    const storedMoney = parseInt(localStorage.getItem("userAssets"));
    if (storedMoney < 0) {
      setLostCount((prevCount) => prevCount + 1); // 잃은 횟수 카운트 증가
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 3번 잃을 때마다 모달을 띄우기
  useEffect(() => {
    if (lostCount > 0 && lostCount % 2 === 0) {
      setShowModal(true);
    }
  }, [lostCount]);

  return (
    <>
      {showModal && <LossWarning onClose={handleCloseModal} />}
      <LostCountContext.Provider value={(lostCount, setLostCount)}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/snail" element={<Snail />} />
          <Route path="/ladder" element={<Ladder />} />
          <Route path="/powerball" element={<PowerBall />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LostCountContext.Provider>
    </>
  );
}

export default App;
