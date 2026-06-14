import "./courses.css";
import React, { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import searchIcon from "../assets/search-b.png";
import CourseCard from "../components/CourseCard";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpeg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";
import course7 from "../assets/course7.jpg";
import course8 from "../assets/course8.jpg";
import course9 from "../assets/course9.jpg";
import course10 from "../assets/course10.jpg";


const Courses = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");

 const courses = [
  {
    id: 1,
    image: course1,
    instructor: "Jason Williams",
    category: "UI/UX Design",
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
    category: "Financial",
    title: "Personal Finance & Investing",
    duration: "09 hr 10 mins",
    lectures: "32",
    price: "$350",
    rating: "4.8"
  },

  // NEW MATCHED COURSES
  {
    id: 6,
    image: course6,
    instructor: "David Miller",
    category: "MongoDB",
    title: "MongoDB for Beginners",
    duration: "06 hr 50 mins",
    lectures: "22",
    price: "$280",
    rating: "4.7"
  },
  {
    id: 7,
    image: course7,
    instructor: "Sophia Lee",
    category: "Flutter",
    title: "Flutter App Development",
    duration: "11 hr 00 mins",
    lectures: "38",
    price: "$400",
    rating: "4.8"
  },
  
  {
    id: 8,
    image: course8,
    instructor: "Anita Sharma",
    category: "Python",
    title: "Python Programming Masterclass",
    duration: "13 hr 00 mins",
    lectures: "45",
    price: "$460",
    rating: "4.9"
  },
  {
    id: 9,
    image: course9,
    instructor: "Rahul Mehta",
    category: "Cyber Security",
    title: "Cyber Security Fundamentals",
    duration: "10 hr 15 mins",
    lectures: "33",
    price: "$410",
    rating: "4.8"
  },
  {
    id: 10,
    image: course10,
    instructor: "Neha Joshi",
    category: "Machine Learning",
    title: "Machine Learning A-Z Guide",
    duration: "14 hr 30 mins",
    lectures: "50",
    price: "$500",
    rating: "4.9"
  }
];

    const filteredCourses =
  selectedCategory === "All"
    ? courses
    : courses.filter(
        (course) =>
          course.category === selectedCategory
      );
  return (
    <div className="courses-container">

     
      <div className="course-header">
        
        <h1>All  <span className="highlight">Courses Of</span> SkillDo</h1>

  

        <div className="search-bar">
          <input type="text" placeholder="Search your courses"
             />
         <img src={searchIcon}
    alt="search"
    className="search-icon"
  />
        </div>

      </div>
  
       <CategoryFilter
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
    <div className="course-grid">

  {filteredCourses.map((course) => (
    <CourseCard
  key={course.id}
  id={course.id}
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