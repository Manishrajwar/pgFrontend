import React from "react";
import "./home.css";
import background from "../assets/homebackground.png";
import backgroundFilter from "../assets/homefilter.png";
import Navbar from "../Common/Navbar";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className="homeWrap">
        
      <img
        src={background}
        loading="lazy"
        alt="background"
        className="background"
      />
      <img
        src={backgroundFilter}
        alt="backgroundFilter"
        loading="lazy"
        className="backgroundFilter"
      />

      <Navbar />

      <div className="homeCont">
        <div className="homeContent">
          <h2>Explore the world with exciting people</h2>
          <p>
            We help people find co travellers and also structure their travel
            plans{" "}
          </p>
          <button>
            <span>Book With Us</span> <FaArrowRight />{" "}
          </button>
        </div>
      </div>


    </div>

  );
}

export default Home;
