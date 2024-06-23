import "./css/slider.css";
import Arrow from "./Arrow";
import Dots from "./Dots";
import slider01 from "../../assets/slider01.png";
import slider02 from "../../assets/slider02.png";
import slider03 from "../../assets/slider03.png";
import pageLogo from "../../assets/pageLogo.png";

const Slider = () => {
  return (
    <div className="sliderContainer">
      <div className="sliderWrap">
        <div className="slider">
          <img src={slider01} alt="#slider" />
        </div>
        <div className="slider">
          <img src={slider02} alt="#slider" />
        </div>
        <div className="slider">
          <img src={slider03} alt="#slider" />
        </div>
      </div>
      <Arrow
        id={"arrowLeft"}
        styleValue={{ transform: "translate(0, -50%) rotate(0deg)", left: "0" }}
      />
      <Arrow
        id={"arrowRight"}
        styleValue={{
          transform: "translate(-100%, -50%) rotate(180deg)",
          left: "100%",
        }}
      />
      <Dots />
    </div>
  );
};
export default Slider;
