import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import {createContext, useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from './Firebase';
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
      <UserContext value={{user}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </UserContext>
  )
};

export default App;