import { useState, useEffect, createContext, useRef } from "react";
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
  const [lostCount, setLostCount] = useState(0);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 3번 플레이 할 때마다 모달을 띄우기
  useEffect(() => {
    if (lostCount != 0 && lostCount % 10 === 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [lostCount]);

  const changeLostCountHandler = () => {
    setLostCount(lostCount % 10 === 0 ? 11 : lostCount + 1);
  };

  return (
    <>
      {showModal && <LossWarning onClose={handleCloseModal} />}
      <LostCountContext.Provider value={changeLostCountHandler}>
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
