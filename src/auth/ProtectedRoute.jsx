import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({isLogin}) {


    const navigate = useNavigate();

      useEffect(()=>{
           if(!isLogin){
            //    navigate("/login")
        }
        else {
            navigate("/room");
           }
      },[])
}

export default ProtectedRoute