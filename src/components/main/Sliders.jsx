import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider01 from "../../assets/slider01.png";
import slider02 from "../../assets/slider02.png";
import slider03 from "../../assets/slider03.png";
import Arrow from "./Arrow";
import "./css/slider.css";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Arrow
      id="arrowRight"
      styleValue={{
        transform: "translate(0, -50%) rotate(180deg)",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Arrow
      id="arrowLeft"
      styleValue={{
        transform: "translate(0, -50%) rotate(0deg)",
        left: "10px",
      }}
      onClick={onClick}
    />
  );
};

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <div>
          <img src={slider01} alt="slider 1" />
        </div>
        <div>
          <img src={slider02} alt="slider 2" />
        </div>
        <div>
          <img src={slider03} alt="slider 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
