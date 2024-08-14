import { Swiper, SwiperSlide } from 'swiper/react';
import icon from "../assets/icon.png";
import swipbg from "../assets/swipebg.png";
import texticon from "../assets/Text+icons.png";
import "./component.css"
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Home2swiper = forwardRef((props, ref) => {
  const swiperRef = useRef(null);

  useImperativeHandle(ref, () => ({
    swiper: swiperRef.current.swiper,
  }));

  return (
    <Swiper
      rewind={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={2}
      spaceBetween={0}
      ref={swiperRef}
    >
      <SwiperSlide>
        <div className="singswipe">
          <img src={swipbg} alt="Background" className="swipbg" />
          <p className="bestsellertag">
            <span>Best seller</span>
          </p>
          <div className="swimidCont">
            <div className="swmidcleft">
              <h3>See the best of Paris, Nice and Marseille</h3>
              <img src={texticon} alt="Text Icon" />
            </div>
            <p>
              <img src={icon} alt="Icon" /> <span>6 Nights, 7 days</span>
            </p>
          </div>
          <button className="checkdbtns">
            <span>CHECK DETAILS</span>
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="singswipe">
          <img src={swipbg} alt="Background" className="swipbg" />
          <p className="bestsellertag">
            <span>Best seller</span>
          </p>
          <div className="swimidCont">
            <div className="swmidcleft">
              <h3>See the best of Paris, Nice and Marseille</h3>
              <img src={texticon} alt="Text Icon" />
            </div>
            <p>
              <img src={icon} alt="Icon" /> <span>6 Nights, 7 days</span>
            </p>
          </div>
          <button className="checkdbtns">
            <span>CHECK DETAILS</span>
          </button>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="singswipe">
          <img src={swipbg} alt="Background" className="swipbg" />
          <p className="bestsellertag">
            <span>Best seller</span>
          </p>
          <div className="swimidCont">
            <div className="swmidcleft">
              <h3>See the best of Paris, Nice and Marseille</h3>
              <img src={texticon} alt="Text Icon" />
            </div>
            <p>
              <img src={icon} alt="Icon" /> <span>6 Nights, 7 days</span>
            </p>
          </div>
          <button className="checkdbtns">
            <span>CHECK DETAILS</span>
          </button>
        </div>
      </SwiperSlide>

    </Swiper>
  );
});

export default Home2swiper;
