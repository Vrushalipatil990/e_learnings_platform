import React from "react";
import "./courses.css";
import CategoryFilter from "../components/CategoryFilter";
import searchIcon from "../assets/search-b.png";
import CourseCard from "../components/CourseCard";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpeg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";

const Courses = () => {


 const courses = [
  {
    id: 1,
    image: course1,
    instructor: "Jason Williams",
    category: "UI/UX",
    title: "UI/UX Design Fundamentals",
    duration: "08 hr 15 mins",
    lectures: "29",
    price: "$385",
    rating: "4.9"
  },

  {
    id: 2,
    image: course2,
    instructor: "Rose Simmons",
    category: "Development",
    title: "React JS Complete Bootcamp",
    duration: "10 hr 30 mins",
    lectures: "35",
    price: "$420",
    rating: "4.8"
  },

  {
    id: 3,
    image: course3,
    instructor: "Pamela Foster",
    category: "Data Science",
    title: "Python for Data Science",
    duration: "12 hr 20 mins",
    lectures: "40",
    price: "$450",
    rating: "4.9"
  },

  {
    id: 4,
    image: course4,
    instructor: "John Carter",
    category: "Business",
    title: "Business Management Essentials",
    duration: "07 hr 45 mins",
    lectures: "25",
    price: "$300",
    rating: "4.7"
  },

  {
    id: 5,
    image: course5,
    instructor: "Emily Watson",
    category: "Finance",
    title: "Personal Finance & Investing",
    duration: "09 hr 10 mins",
    lectures: "32",
    price: "$350",
    rating: "4.8"
  }
];
  return (
    <div className="courses-container">

     
      <div className="course-header">
        
        <h1>All  <span className="highlight">Courses Of</span> SkillDo</h1>
       
  

        <div className="search-bar">
          <input type="text"placeholder="Search your courses"
             />
         <img src={searchIcon}
    alt="search"
    className="search-icon"
  />
        </div>
      </div>
  
      <CategoryFilter />
    <div className="course-grid">

  {courses.map((course) => (
    <CourseCard
      key={course.id}
      image={course.image}
      instructor={course.instructor}
      category={course.category}
      title={course.title}
      duration={course.duration}
      lectures={course.lectures}
      price={course.price}
      rating={course.rating}
    />
  ))}

</div>

    </div>
  );
};

export default Courses;