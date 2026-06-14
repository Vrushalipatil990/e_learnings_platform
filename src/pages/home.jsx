import React, { useEffect, useState } from "react";
import EnrolledCourseCard from "../components/EnrolledCourseCard";
import Dashboard from "../components/Dashboard";
import "./Home.css";

function Home() {
  const userName = "Donald";

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const courses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setEnrolledCourses(courses);
  }, []);

  return (
    <>
      <div className="hero-section">
        <h1>Welcome back, {userName}!</h1>

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