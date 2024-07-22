import "./home.css"
import location from "../assets/Vector.png"
import ecp from "../assets/Ellipse 1.png"
import { FirebaseContext } from "../context/Firebase";
import { useContext, useEffect, useState } from "react";

let allRooms = []

function Home() {

  const {    }  = useContext(FirebaseContext);




  return (
    <div className='homeWrap'> 
    
      <div className="homeFirsec">

         <div className="homeCont relative">
            <h2>Room Finder</h2>
         

              {/* serch funtionality  */}
              <div className="homeSearch">

              <h3>Find a PG/ROOMS in Tanakpur</h3>

               <label>
              
              <img src={location} alt="" />
              <input type="text" placeholder="Enter an address, neighbourhood or city" />

               </label>

               <button><span>Search Now</span></button>

              </div>

              </div>

      </div>


      <div className="homeCont2">

          <div className="showTotal">

         <h4>Recently Added Properties</h4>

         <p className="totalRom">1440 Rooms/PGs</p>
          </div>

          {/* filter and rooms  */}

           <div className="filterRoomWrap">

               {/* filter side  */}
               <div className="filterCont">

               </div>

               {/* room side  */}
               <div className="allRoomms">

                  {
                   allRooms?.map((room , index)=>(
                    <div key={index} className="singleROM">

                      {/* left side */}
                      <div className="imageside">

                        {/* <img src={`${getImageURL2(room?.BackgroundPhoto)}`} alt="" /> */}

                      </div>

                      {/* riht sie  */}
                      <div className="contentSide">

                         {/* top side  */}
                         <div className="ContTop">
                            
                            {/* left side */}
                            <div className="conTopLEFT">

                              <h4>{room?.PgName}</h4>
                              <p className="add">{room?.About}</p>

                               <p className="romPrice"><span>Rs.{room.Price}/</span>per month</p>

                            </div>

                            <div className="contTopRig">
                                   <p>{room?.rating}</p>
                            </div>

                         </div>

                         {/* bottom side  */}
                         <div className="contBotm">
                          {/* left  */}
                          <div className="Btmleft">
                             <img src={location} alt="" />
                             <span>1.2 km from Gwarko</span>
                          </div>

                          <div className="Btmleft">
                           <img src={ecp} alt="" />
                           <span>Available</span>
                          </div>
                         </div>

                      </div>
                   

                    </div>
                   )) 
                  }

               </div>

           </div>
        
      </div>

      <button className="">submit</button>


    </div>
  )
}

export default Home