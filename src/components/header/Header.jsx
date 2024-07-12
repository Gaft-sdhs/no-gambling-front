import Logo from "./Logo";
import HeaderItem from "./HeaderItem";
import Banners from "./Banners";
import MenuBtn from "./MenuBtn";
import "./css/header.css";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const menuHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Logo />
        </div>
        <ul className={"nav" + (clicked ? " clicked" : " unclicked")}>
          <HeaderItem name={"달팽이"} link={"/snail"} />
          <HeaderItem name={"사다리"} link={"/ladder"} />
          <HeaderItem name={"파워볼"} link={"/Powerball"} />
          <HeaderItem name={"충전"} link={""} />
        </ul>
        <MenuBtn Handler={menuHandler} />
      </header>
      <Banners />
    </>
  );
};

export default Header;
