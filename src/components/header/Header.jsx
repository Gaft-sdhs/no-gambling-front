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

  const chargehanlder = () => {
    // console.log("Charge Clicked");
    if (confirm("정말 도박에 충전을 하시겠습니까?")) {
      if (confirm("진짜 정말로 도박에 충전을 하시겠습니까?")) {
        alert("저희는 도박 예방 사이트 입니다. 충전은 불가 합니다.");
      }
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Logo />
        </div>
        <ul className={"nav" + (clicked ? " clicked" : " unclicked")}>
          <HeaderItem name={"달팽이"} action={"/snail"} />
          <HeaderItem name={"사다리"} action={"/ladder"} />
          <HeaderItem name={"파워볼"} action={"/Powerball"} />
          <HeaderItem name={"충전"} action={chargehanlder} type={"NONE"} />
        </ul>
        <MenuBtn Handler={menuHandler} />
      </header>
      <Banners />
    </>
  );
};

export default Header;
