import Header from "./components/header/Header";
import Index from "./pages/Index";
import Snail from "./pages/Snail";
import Ladder from "./pages/Ladder";
import PowerBall from "./pages/PowerBall";
import { Route, Routes, Navigate } from "react-router-dom";

import "./css/index.css";

function App() {
  return (
    <>
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
