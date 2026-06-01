import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Courses = () => {
  return (

<div className="courses-container">


  <div className="course-header">
    <div>
    <h1>All Courses Of Skilldo</h1>
    </div>
    <div className="search-bar">
        <input type="Text" placeholder="Search your courses" />
        </div>

    
    
  </div>
  </div>
  );
};
export default Courses;
 