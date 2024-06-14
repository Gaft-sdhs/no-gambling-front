import Header from "./components/header/Header";
import Index from "./pages/Index";
import Snail from "./pages/Snail";
import Ladder from "./pages/Ladder";
import Sniffling from "./pages/Sniffling"
import Store from "./pages/Store";
import Script from "./Script";
import { Route,Routes } from "react-router-dom";

import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/snail" element={<Snail />}/>
        <Route path="/Sniffling" element={<Sniffling />}/>
        <Route path="/Ladder" element={<Ladder />}/>
        <Route path="/Store" element={<Store />}/>
      </Routes>
      <Script />
    </>
  );
}

export default App;
