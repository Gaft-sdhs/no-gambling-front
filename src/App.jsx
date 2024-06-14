import { useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Script from "./Script";

import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Script />
    </>
  );
}

export default App;
