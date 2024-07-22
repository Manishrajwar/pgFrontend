import "./login.css"
import { useDispatch } from "react-redux";
import { login , signUp } from "../services/operations/authAPI"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login({signup=false}) {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formdata , setFormdata] = useState({
    email:"" , 
    password:"" , 
    role:"User"
  })

  const signInWithGoogle = async()=>{

  }

  const signHandler = (e) => {

    e.preventDefault();

    dispatch(signUp(formdata?.email , formdata?.password, navigate));

     // Reset
     setFormdata({
      email:"" , 
      password:"" , 
      role:"User"
    })
  
  }

  const loginHandler = (e)=>{
    e.preventDefault();

    dispatch(login(formdata?.email , formdata?.password, navigate));

    
  }



  return (
    <div className="loginmaxWrap">
        
          <div className="loginWrap">

         <div className="loginFirCont">
            

         <h2>Room Finder</h2>
         <p className="prar">Ultimate property finder</p>

         </div>

         </div>

         <div className="loginFirCont ">

            {/* login form  */}
            <form onSubmit={signup?signHandler : loginHandler} className="loginFrom">

                <h3>Sign {signup?"Up":"In"} to Continue</h3>

                <label >
                    <p>Email Address</p>
                    <input required value={formdata.email} name="email" onChange={(e)=>setFormdata((prev)=>({
                      ...prev ,
                      email:e.target.value
                    }))} type="email"  />
                </label>

                <label >
                    <p>Password</p>
                    <input required onChange={(e)=>setFormdata((prev)=>({
                      ...prev ,
                      password:e.target.value
                    }))} name="password" value={formdata.password} type="password"  />
                </label>
         
         <button type="submmit" ><span>{signup?"Sign Up":"Log In"} </span>  </button>

 {
    !signup && 
         <div className="resetWrap">
            <p>Reset Password</p>
         </div>
        }

            </form>

         </div>

         <button onClick={signInWithGoogle} className=" bg-red-400 my-4 mx-10">Sign with Google</button>
        
        </div>
  )
}

export default Login