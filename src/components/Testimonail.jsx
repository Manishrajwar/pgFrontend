import "./blog.css";
import star from "../assets/starts.png";
import profile from "../assets/profile.png";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



function Testimonail() {
  return (
    <div className="testiwrap">
      <div className="testiCont">

        <div className="testtop">
          <p className="testitag">What customers say</p>
          <h2>Customer testimonials</h2>
        </div>

        <Swiper
          rewind={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={0}
        >
          <SwiperSlide>
            <div className="singletebox">
              <img className="starimg" src={star} alt="" />

              <p className="estipara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. uspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>

              <div className="profildea">
                <img src={profile} alt="" />
                <div className="profc">
                  <p className="namep">Orlando Diggs</p>
                  <p className="addpre">Position, Company name</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="singletebox">
              <img className="starimg" src={star} alt="" />

              <p className="estipara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. uspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>

              <div className="profildea">
                <img src={profile} alt="" />
                <div className="profc">
                  <p className="namep">Orlando Diggs</p>
                  <p className="addpre">Position, Company name</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="singletebox">
              <img className="starimg" src={star} alt="" />

              <p className="estipara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. uspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>

              <div className="profildea">
                <img src={profile} alt="" />
                <div className="profc">
                  <p className="namep">Orlando Diggs</p>
                  <p className="addpre">Position, Company name</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonail;
