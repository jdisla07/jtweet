import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import { useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from './Firebase';
import Home from "./pages/home/Home";
const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        console.log("user is logged out")
        navigate("/login");
      }else {
        console.log("user is logged in", user)
        setUser(user);
      }
    });

  }, [])

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
  )
};

export default App;