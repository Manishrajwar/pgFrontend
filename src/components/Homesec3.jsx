import React from 'react'
import "./styles.css"
import img from "../assets/Img.png"

function Homesec3() {
  return (
    <div className='sec3wrap'>

        <div className="sec3cont">

            {/* left img */}
            <img src={img} alt="" />

          <div className="sec3right">
            {/* left side  */}

             <div className="se3righleft">
                <p>Exclusive offer</p>
                <h3>Book your holiday with complete confidence</h3>
             </div>

              <button className='booknow'><span>Book Now</span></button>

          </div>

        </div>


        


    </div>
  )
}

export default Homesec3