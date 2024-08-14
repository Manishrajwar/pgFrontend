import React from 'react'
import "./service.css"
import rec3 from "../assets/rectange3.png"
import neRec from "../assets/newRec.png"
import { FaArrowRight } from "react-icons/fa";


function Service() {
  return (
    <div className='servicewrap'>

        <div className="servicecont">

            <h3>Our Services</h3>

            <div className="serviceimages">

                <img src={neRec} alt="rec3" className='rec3' />

                <div className='servirwoinmg'>
                    <img src={rec3} alt="" />
                    <img src={rec3} alt="" />
                </div>

            </div>

            <button className='seeMorebtn'><span>See more</span><FaArrowRight /> </button>

        </div>
         
    </div>
  )
}

export default Service