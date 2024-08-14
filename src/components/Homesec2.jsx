import "./component.css";
import Home2swiper from "./Home2swiper";
import leftbtn from "../assets/leftbtns.png"
import rightbtn from "../assets/rightbtns.png"
import { useRef } from "react";

function Homesec2() {

  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="hse2wrap">
      <div className="hse2cont">
        <div className="hs2top">
          <div className="cantafort">
            <span>Can't afford to overpay? </span>
          </div>
          <h2>
            Can't afford to overpay? Travel smart with transparent pricing
          </h2>
        </div>

        <div className="swiper-container">
      <img src={leftbtn} alt="Previous" onClick={handlePrev} />
      <Home2swiper ref={swiperRef} />
      <img src={rightbtn} alt="Next" onClick={handleNext} />
    </div>
      </div>
    </div>
  );
}

export default Homesec2;
