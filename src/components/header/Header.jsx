import Logo from "./Logo";
import HeaderItem from "./HeaderItem";
import Banners from "./Banners";
import MenuBtn from "./MenuBtn";
import "./css/header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Logo />
        </div>
        <ul className="nav">
          <HeaderItem name={"달팽이"} link={"/snail"} />
          <HeaderItem name={"사다리"} link={"/ladder"} />
          <HeaderItem name={"파워볼"} link={"/Powerball"} />
          <HeaderItem name={"충전"} link={""} />
        </ul>
        <MenuBtn />
      </header>
      <Banners />
    </>
  );
};

export default Header;
