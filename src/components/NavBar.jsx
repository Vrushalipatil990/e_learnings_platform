import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../components/NavBar.css";
import logo_light from "../assets/logo-black.png";
import logo_dark from "../assets/logo-white.png";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import { NavLink } from "react-router-dom";


const NavBar = ({ theme, setTheme }) => {

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
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to ="/courses">Course</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/quize">Quiz</NavLink>
          </li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img
            src={theme == "light" ? search_icon_light : search_icon_dark}
            id="search-icon-img"
            alt="Search"
          />
        </div>

      <div className="nav-actions">

  <img
    onClick={() => {
      toggle_mode();
    }}
    src={theme == "light" ? toggle_light : toggle_dark}
    alt="Toggle"
    className="toggle-icon"
  />

  <div className="profile">
    👤
  </div>

  <div
    className="hamburger"
    onClick={() => setShowMenu(!showmenu)}
  >
    <GiHamburgerMenu />
  </div>

</div>

    </nav>
  );
};

export default NavBar;