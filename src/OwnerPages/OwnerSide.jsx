import "../pages/home.css";
import location from "../assets/Vector.png";
import { useContext, useEffect, useState } from "react";
import "./owner.css"
import { FirebaseContext } from "../context/Firebase";



function OwnerSide() {

    const { ownerPersonal , setOwnerPersonal , PgDetail , setPgDetail }  = useContext(FirebaseContext);

     const personHandler = (e)=>{
        const {value , name} = e.target;

         setOwnerPersonal((prev)=>({
            ...prev ,
            [name]:value
         }))
     }

     const pgHandler = (e)=>{
        const {value , name} = e.target;

        setPgDetail((prev)=>({
            ...prev ,
            [name]:value
         }))
     }

     const pgHandler2 = (e) => {
      const { name } = e.target;
      const file = e.target.files[0];

      setPgDetail((prev) => ({
          ...prev,
          [name]: file
      }));
  };

     const savePersonalDetail = async(e)=>{
   console.log("avel");
     }


     const pgFormHandler = async(e)=>{
      console.log("fsdf");
     }


  return (
    <div className="homeWrap">

      <div className="homeFirsec">


        <div className="homeCont relative">
          <h2>Owner Panel</h2>

          {/* serch funtionality  */}
          <div className="homeSearch">
            <h3>Find a PG/ROOMS in Tanakpur</h3>

            <label>
              <img src={location} alt="" />
              <input
                type="text"
                placeholder="Enter an address, neighbourhood or city"
              />
            </label>

            <button>
              <span>Search Now</span>
            </button>
          </div>

        </div>


      </div>

      {/* this is form side  */}
      <div className="ownerForCont">

        {/* left side */}
        <div className="UserPerFormCont">

           <h2>Personal Details</h2>


             <form onSubmit={savePersonalDetail} >

                <label >
                    <p>FullName*</p>
                    <input required type="text" value={ownerPersonal?.FullName} name="FullName" onChange={personHandler}  />
                </label>

                <label >
                    <p>Contact Number*</p>
                    <input required type="number" value={ownerPersonal?.Contact} name="Contact" onChange={personHandler}  />
                </label>

                <label >
                    <p>Address*</p>
                    <input required type="text" value={ownerPersonal?.Address} name="Address" onChange={personHandler}  />
                </label>

              <button><span>Save</span></button>

             </form>
        </div>

        {/* right form  */}
            <div className="OwnPgFormCont">

                <h2>PG FORM</h2>

                <form onSubmit={pgFormHandler}>

                <label >
                    <p>PG Name*</p>
                    <input type="text" value={PgDetail?.PgName} name="PgName" onChange={pgHandler}  />
                </label>

                <label >
                    <p>About</p>
                    <input type="text" value={PgDetail?.About} name="About" onChange={pgHandler}  />
                </label>

                <label >
                    <p>Facility</p>
                    <input type="text" value={PgDetail?.Facilities} name="Facilities" onChange={pgHandler}  />
                </label>

                <label >
                    <p>Price</p>
                    <input type="number" value={PgDetail?.Price} name="Price" onChange={pgHandler}  />
                </label>

                <label >
                    <p>TotalRooms</p>
                    <input type="number" value={PgDetail?.TotalRooms} name="TotalRooms" onChange={pgHandler}  />
                </label>


                <label >
                    <p>BackgroundPhoto</p>
                    <input type="file" name="BackgroundPhoto" onChange={pgHandler2}  />
                </label>
{/* 
                <label >
                    <p>Images</p>
                    <input type="file" value={PgDetail?.Images} name="Images" onChange={pgHandler}  />
                </label> */}

                <button><span>Save</span></button>


                </form>

            </div>

      </div>

    </div>
  );
}

export default OwnerSide;
