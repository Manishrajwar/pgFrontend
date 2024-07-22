import "./common.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/authAPI"


function Navbar() {

  const {user} = useSelector((state)=>state.profile);

  const dispatch = useDispatch();

   const navigate = useNavigate();

   const userSignout = ()=>{
     dispatch(logout(navigate));
   }

  return (
    <div className="navbarWrap">

 {
  user ?
  <button onClick={userSignout}>Logout</button>

  :
  <>
   <button onClick={()=> navigate("/login")}>Login</button>
    {" "}
   <button onClick={()=>navigate("/signup")}>Signup</button>
  </>


 }
        

    </div>
  )
}

export default Navbar