import { createContext, useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children })=>{

  const navigate = useNavigate();

  const [ownerPersonal , setOwnerPersonal] = useState({
    FullName:"" , 
    Contact:"" , 
    Address:"",

 })



 const [PgDetail , setPgDetail] = useState({
    PgName:"",
    About:"",
    Facilities:"" , 
    Price:"" , 
    TotalRooms:"",
    BackgroundPhoto:"" , 
    Images:""
 })

 const value = {   setOwnerPersonal , setPgDetail  , PgDetail   };
    
    
    return (
        <FirebaseContext.Provider value={value}>
            {children}
        </FirebaseContext.Provider>
    )
}
