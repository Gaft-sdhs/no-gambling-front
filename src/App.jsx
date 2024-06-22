import Header from "./components/header/Header";
import Index from "./pages/Index";
import Snail from "./pages/Snail";
import Store from "./pages/Store";
import Ladder from "./pages/Ladder";
import PowerBall from "./pages/PowerBall";
import { Route,Routes } from "react-router-dom";

import "./css/App.css";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/snail" element={<Snail />}/>
        <Route path="/Ladder" element={<Ladder />}/>
        <Route path="/Powerball" element={<PowerBall />}/>
        <Route path="/Store" element={<Store />}/>
      </Routes>
    </>
  );
}

export default App;
