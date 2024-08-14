import React from 'react'
import "./home.css"
import frame from '../assets/Frame.png'
import frame1 from '../assets/Frame2.png'
import frame2 from '../assets/Frame3.png'
import frame3 from '../assets/Frame4.png'
import frame4 from '../assets/Frame5.png'
import { FaArrowRight } from "react-icons/fa";


function Homesec4() {
  return (
    <div className='hsec4wrap'>

       <div className="hsec4cont">

         <h2>Top Destination</h2>

         <div className="sec4image">

                 {/* first sec */}
                 <div className="sec4sec1">
                  <img src={frame} alt="" />
                  <img src={frame1} alt="" />
                 </div>
          
                 <div className="sec4sec2">
                  <img src={frame2} alt="" />
                  <img src={frame3} alt="" />
                  <img src={frame4} alt="" />
                 </div>

                 <button className='seealljour'><span>See all journeys</span> <FaArrowRight />   </button>
          
         </div>

       </div>
        
    </div>
  )
}

export default Homesec4