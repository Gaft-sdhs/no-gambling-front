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
  const lostCount = useRef(0); // 잃은 횟수 카운트

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 2번 잃을 때마다 모달을 띄우기
  useEffect(() => {
    if (lostCount != 0 && lostCount % 2 === 0) {
      setShowModal(true);
    }
  }, [lostCount]);

  const changeLostCountHandler = () => {
    lostCount.current++;
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
