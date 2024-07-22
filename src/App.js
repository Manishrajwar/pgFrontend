import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Common/Navbar";
import RoomDetail from "./pages/RoomDetail";
import OwnerSide from "./OwnerPages/OwnerSide";
import MyPgDetail from "./OwnerPages/MyPgDetail";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {

  const {user} = useSelector((state)=>state.profile);

  console.log('user' ,user);


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

       {
        user?.accountType === "Owner" && 
        <>
        <Route path="/owner" element={<OwnerSide />} />
        <Route path="/myPgDetail" element={<MyPgDetail />} />
        <Route path="*" element={<ProtectedRoute isLogin={true} />} />
        </>

       }
       {
        user?.accountType === "User" && 
        <>
        <Route path="/room" element={<RoomDetail />} />
     <Route path="*" element={<ProtectedRoute isLogin={true} />} />
        
        </>
       }

           {
            !user &&  
            <>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login signup={true} />} />
        <Route path="*" element={<ProtectedRoute isLogin={false} />} />
            </>
           }
      </Routes>
    </div>
  );
}

export default App;
