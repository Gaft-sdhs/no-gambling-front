import "./css/slider.css";
import SliderItem from "./SliderItem";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Slider = () => {
  return (
    <div className="sliderContainer">
      <div className="sliderWrap">
        <SliderItem sliderFile={"/slider01.png"} />
        <SliderItem sliderFile={"/slider02.png"} />
        <SliderItem sliderFile={"/slider03.png"} />
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
