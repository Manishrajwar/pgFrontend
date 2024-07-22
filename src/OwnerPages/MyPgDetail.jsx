import "../pages/room.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import rectangle from "../assets/Rectangle 36.png";
import location from "../assets/Vector.png";
import rec from "../assets/Ellipse 1.png";
import check from "../assets/check.png";
import userImg from "../assets/userImg.png"


const des = ["1 Big Hall", "Shared Toilet", "Shared Toilet", "Shared Toilet"];

const user = [
    {
       Image: userImg , 
       Name:"Carso Carpentery" , 
       Time:"32 min" , 
    PhoneNumber: "1234XXXXXX"
    },
    {
       Image: userImg , 
       Name:"Carso Carpentery" , 
       Time:"32 min" , 
    PhoneNumber: "1234XXXXXX"
    },
    {
       Image: userImg , 
       Name:"Carso Carpentery" , 
       Time:"32 min" , 
    PhoneNumber: "1234XXXXXX"
    },
    {
       Image: userImg , 
       Name:"Carso Carpentery" , 
       Time:"32 min" , 
    PhoneNumber: "1234XXXXXX"
    },
]

function MyPgDetail() {
  return (
    <div className="romWrap">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={rectangle} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rectangle} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rectangle} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rectangle} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rectangle} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="romCont">

        {/* left side  */}
        <div className="romDetailCont">
          {/* first  */}
          <div className="romDeTop">
            {/* left  */}
            <div className="romDeLef">
              <h2>1 Big Hall at Lalitpur</h2>
              <p>
                Rs.8000/ <span>per month</span>
              </p>
            </div>

            {/* right side */}
            <div className="romDeRi">
              <p>3</p>
            </div>
          </div>

          {/* second */}
          <div className="romDeSec">
            {/* left side */}
            <div className="roDeSl">
              <div className="rodeimg">
                <img src={location} alt="" />
                <span>1.2 km from Gwarko</span>
              </div>

              <p className="addp">Mahalaxmi, Lalitpur</p>

              <p className="applied">0 Applied | 19 Views</p>
            </div>

            {/* rigth sid */}
            <div className="roDeSl">
              <div className="rodeimg">
                <img src={rec} alt="" />
                <span>Available</span>
              </div>

              <p className="propb">Property Owned By: Alok</p>

              <p className="vigoogle">View on Google Maps</p>
            </div>
          </div>

          <hr />

          <div className="descWrap">
            <h4>Description</h4>

            <p className="ddecpara">
              1 big hall room for rent at lalitpur, ktm with the facilities of
              bike parking and tap water . it offers 1 bedroom,and a 1 common
              bathroom for whole flat. It is suitable for student only. Price is
              negotiable for student only.{" "}
            </p>
          </div>

          <div className="descWrap">
            <h4>Facilities</h4>

            <div className="allDes">
              {des.map((d, index) => (
                <div key={index} className="singlDes">
                  <img src={check} alt="" />
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="booknow">
            <span>Book Now</span>
          </button>
        </div>

        {/* right side  */}
         <div className="whoWatchMe">

            {
                user.map((u , index)=>(

                    <div key={index} className="singleUser">

                        {/* left side  */}
                        <div className="userLeft">
                            <img src={u.Image} alt="" />
                             <div className="userNameC">
                                <p className="userName">{u.Name}</p>
                                <p className="userCont">{u.PhoneNumber}</p>
                             </div>
                        </div>

                        {/* right side  */}
                        <p className="uTime">{u.Time}</p>

                    </div>

                ))
            }


         </div>

      
      </div>
      
    </div>
  );
}

export default MyPgDetail;
