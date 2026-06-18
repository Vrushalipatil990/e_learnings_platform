import React, { useEffect, useState } from "react";
import EnrolledCourseCard from "../components/EnrolledCourseCard";
import Dashboard from "../components/Dashboard";
import "./Home.css";
import {getProfile} from  "../services/userService";

function Home() {
  
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const courses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setEnrolledCourses(courses);
  }, []);

  return (
    <>
      <div className="hero-section">
        <h1>Welcome back, {user?.fullName}!</h1>

        <p>
          Continue your learning journey with SkillDo.
        </p>
      </div>

      <Dashboard />

      <h2 className="enrolled-heading">
        Enrolled Courses
      </h2>

      <div className="enrolled-courses">
        {enrolledCourses.length === 0 ? (
          <p>No enrolled courses yet.</p>
        ) : (
          enrolledCourses.map((course) => (
            <EnrolledCourseCard
              key={course.id}
              title={course.title}
              progress={0}
              completedLessons={0}
              totalLessons={course.lectures}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Home;