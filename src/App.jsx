import{BrowserRouter,Routes,Route} from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

const App = () => {
  const current_theme = localStorage.getItem('current_theme') || 'light';
  const[theme,setTheme] = useState(current_theme ?current_theme :'light');
  useEffect(()=>{
    localStorage.setItem('current_theme',theme)
  },[theme])
  return (
  <BrowserRouter>
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
   
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} /> 

      </Routes>
      
    </div>
      <Footer theme={theme} />
  </BrowserRouter>
);
}

export default App;