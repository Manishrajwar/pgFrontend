import React from 'react'
import card1 from "../assets/Card 1.png"
import card2 from "../assets/Card 2.png"
import "./service.css"
import { FaArrowRight } from "react-icons/fa";


function WaterActivity() {
  return (
    <div className='waterAcwrap'>

        <div className="wateracticont">

            <h2>Top Water Sports Activities</h2>

            <div className="wateracitems">

                <img src={card1} alt="" />
                <img src={card2} alt="" />
                <img src={card1} alt="" />

            </div>

 <button className='seemorebtn'><span>See more</span> <FaArrowRight /></button>

        </div>

    </div>
  )
}

export default WaterActivity