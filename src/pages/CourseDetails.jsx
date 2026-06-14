import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CourseDetails.css";

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

const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
      rating: "4.9",
      description:
        "Learn UI/UX design principles, wireframing, prototyping, design systems, and user research techniques."
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
      rating: "4.8",
      description:
        "Master React JS, Hooks, Routing, State Management, APIs, and build real-world projects."
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
      rating: "4.9",
      description:
        "Learn Python, NumPy, Pandas, Data Visualization, and Machine Learning fundamentals."
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
      rating: "4.7",
      description:
        "Develop leadership, communication, and business management skills."
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
      rating: "4.8",
      description:
        "Understand investing, budgeting, wealth management, and financial planning."
    },
       {
  id: 6,
  image: course6,
  instructor: "David Miller",
  category: "MongoDB",
  title: "MongoDB for Beginners",
  duration: "06 hr 50 mins",
  lectures: "22",
  price: "$280",
  rating: "4.7",
  description:
    "Learn MongoDB from scratch, including collections, documents, CRUD operations, aggregation, indexing, and database design."
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
  rating: "4.8",
  description:
    "Build beautiful cross-platform mobile applications using Flutter, Dart, widgets, state management, and Firebase integration."
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
  rating: "4.9",
  description:
    "Master Python programming including OOP, file handling, modules, APIs, data structures, and real-world projects."
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
  rating: "4.8",
  description:
    "Learn network security, ethical hacking concepts, vulnerability assessment, encryption, authentication, and cybersecurity best practices."
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
  rating: "4.9",
  description:
    "Understand machine learning algorithms, supervised learning, unsupervised learning, model evaluation, and AI fundamentals."
}
  ];

  const course = courses.find(
  (item) => item.id === Number(id)
);

  const handleEnroll = () => {
  const enrolledCourses =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const alreadyEnrolled = enrolledCourses.some(
    (item) => item.id === course.id
  );

  if (alreadyEnrolled) {
    alert("You are already enrolled in this course.");
    navigate("/my-courses");
    return;
  }

  enrolledCourses.push(course);

  localStorage.setItem(
    "enrolledCourses",
    JSON.stringify(enrolledCourses)
  );

  alert("Course enrolled successfully!");

  navigate("/my-courses");
};
  return (
    <div className="course-details-container">
      <div className="course-details-card">
        <div className="course-image-section">
          <img
            src={course.image}
            alt={course.title}
            className="course-image"
          />
        </div>

        <div className="course-info-section">
          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p className="instructor">
            Instructor: {course.instructor}
          </p>

          <div className="course-stats">
            <div>
              <strong>Duration</strong>
              <span>{course.duration}</span>
            </div>

            <div>
              <strong>Lectures</strong>
              <span>{course.lectures}</span>
            </div>

            <div>
              <strong>Rating</strong>
              <span>⭐ {course.rating}</span>
            </div>
          </div>

          <h3>Description</h3>

          <p className="description">
            {course.description}
          </p>

          <div className="price-enroll">
            <h2>{course.price}</h2>

            <button
              className="enroll-btn"
              onClick={handleEnroll}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;