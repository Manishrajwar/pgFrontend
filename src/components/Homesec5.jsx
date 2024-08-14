import React, { useRef } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules";
import left from "../assets/leftbtns.png";
import right from "../assets/rightbtns.png";
import img1 from "../assets/unsplash_S9xHSYaLmUo.png";
import clock from "../assets/clock.png";

function Homesec5() {
  const swiperRef = useRef(null); // Create a reference for the Swiper instance

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="hsec5wrap">
      <div className="hsec5cont">
        <h2>Browse Our Top Packages</h2>

        <div className="brwseritems">
          <img src={left} alt="left" onClick={handlePrevClick} style={{ cursor: 'pointer' }} />

          <Swiper
            rewind={true}
            modules={[Navigation]}
            className="mySwiper2"
            slidesPerView={3}
            spaceBetween={10}
            ref={swiperRef} // Attach the ref to Swiper
          >
            <SwiperSlide>
              <div className="sec5Item">
                <img src={img1} alt="img" className="sec5img" />

                <div className="s5conteent">
                  <div className="s5itemclock">
                    <img src={clock} alt="" />
                    <span>6 Days & Nights</span>
                  </div>

                  <p className="s5imepara">
                    Learn modern architecture Online course
                  </p>

                  <div className="s5itemprice">
                    $1000 <span>/person</span>
                  </div>
                </div>

                <button className="checkdetabtns1">
                  <span>CHECK DETAILS</span>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec5Item">
                <img src={img1} alt="img" className="sec5img" />

                <div className="s5conteent">
                  <div className="s5itemclock">
                    <img src={clock} alt="" />
                    <span>6 Days & Nights</span>
                  </div>

                  <p className="s5imepara">
                    Learn modern architecture Online course
                  </p>

                  <div className="s5itemprice">
                    $1000 <span>/person</span>
                  </div>
                </div>

                <button className="checkdetabtns1">
                  <span>CHECK DETAILS</span>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec5Item">
                <img src={img1} alt="img" className="sec5img" />

                <div className="s5conteent">
                  <div className="s5itemclock">
                    <img src={clock} alt="" />
                    <span>6 Days & Nights</span>
                  </div>

                  <p className="s5imepara">
                    Learn modern architecture Online course
                  </p>

                  <div className="s5itemprice">
                    $1000 <span>/person</span>
                  </div>
                </div>

                <button className="checkdetabtns1">
                  <span>CHECK DETAILS</span>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec5Item">
                <img src={img1} alt="img" className="sec5img" />

                <div className="s5conteent">
                  <div className="s5itemclock">
                    <img src={clock} alt="" />
                    <span>6 Days & Nights</span>
                  </div>

                  <p className="s5imepara">
                    Learn modern architecture Online course
                  </p>

                  <div className="s5itemprice">
                    $1000 <span>/person</span>
                  </div>
                </div>

                <button className="checkdetabtns1">
                  <span>CHECK DETAILS</span>
                </button>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
          </Swiper>

          <img src={right} alt="right" onClick={handleNextClick} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}

export default Homesec5;
