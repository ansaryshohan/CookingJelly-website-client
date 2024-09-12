import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { sliderData } from "../../../data/sliderData.js";
import SliderItem from "./SliderItem";
import "./slideritems.css";

const PrevArrowBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className="hidden md:block">
      <Link className={` ${className}`} onClick={onClick}>
        <FaArrowLeft className="text-[#fff] lg:text-xl md:text-xl text-base" />
      </Link>
    </div>
  );
};

const NextArrowBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className="hidden md:block">
      <Link className={` ${className}`} onClick={onClick}>
        <FaArrowRight className="text-[#fff] lg:text-xl md:text-xl text-base" />
      </Link>
    </div>
  );
};

const SliderItems = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="w-full">
      <Slider
        {...settings}
        prevArrow={<PrevArrowBtn />}
        nextArrow={<NextArrowBtn />}
        
      >
        {sliderData.map((slider) => (
          <SliderItem key={slider.id} slider={slider} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderItems;
