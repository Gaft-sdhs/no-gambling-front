import Logo from "./Logo";
import HeaderItem from "./HeaderItem";
import Banners from "./Banners";
import "./css/header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav">
          <HeaderItem name={"달팽이"} />
          <HeaderItem name={"홀짝"} />
          <HeaderItem name={"사다리"} />
          <HeaderItem name={"충전"} />
        </div>
      </header>
      <Banners />
    </>
  );
};

export default Header;
