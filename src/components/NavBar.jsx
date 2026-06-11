import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";
import logo_light from "../assets/logo-black.png";
import logo_dark from "../assets/logo-white.png";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import { Link } from "react-router-dom";
// import AuthPopup from "./AuthPopup";

const NavBar = ({ theme, setTheme }) => {

const [showPopup, setShowPopup] = useState(false);
const [authMode, setAuthMode] = useState("login");
  const [showmenu, setShowMenu] = useState(false);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log("clicked");
  };

  return (
    <nav className="navbar">

      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt="Logo"
        className="logo"
      />
      

        <ul className={`nav-links ${showmenu ? "active" : ""}`}>
          <li><Link to="/Home">Home</Link></li> 
          <li> <Link to ="/Courses">Courses</Link></li>
          <li>Blogs</li>
          <li>Quiz</li>
        </ul>

      <div className="nav-actions">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img
            src={theme == "light" ? search_icon_light : search_icon_dark}
            id="search-icon-img"
            alt="Search"
          />
        </div>

  <img
    onClick={() => {
      toggle_mode();
    }}
    src={theme == "light" ? toggle_light : toggle_dark}
    alt="Toggle"
    className="toggle-icon"
  />
  <Link to="/profile"  onClick={() => setShowPopup(true)}>
    <CgProfile  id="profile-icon" 
    color={theme == "light" ? "222": "fff"}
    />
  </Link>

  <div
    className="hamburger"
    onClick={() => setShowMenu(!showmenu)}
  >
    <GiHamburgerMenu />
  </div>

</div>
{showPopup && (
  <AuthPopup
  mode={authMode}
  setMode={setAuthMode}
  closePopup={() => setShowPopup(false)}
/>
)}

    </nav>
  );
};

export default NavBar;