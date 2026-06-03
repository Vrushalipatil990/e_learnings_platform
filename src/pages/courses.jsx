import React, { useState } from "react";
import "./courses.css";
import { NavLink} from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";

const Courses = () => {
  return (
<div>
<div className="courses-container">


  <div className="course-header">
    
    <h1>All Courses Of SkillDo</h1>
    
    <div className="search-bar">
        <input type="Text" placeholder="Search your courses" />
        
        </div>
    
  </div>

  </div>
         <CategoryFilter />
       </div>
  
  );
};
export default Courses;
 