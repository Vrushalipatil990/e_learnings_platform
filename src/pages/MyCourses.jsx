import React, { useState, useEffect } from "react";
import "./MyCourses.css";

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const courses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setEnrolledCourses(courses);
  }, []);

  const removeCourse = (courseId) => {
    const updatedCourses = enrolledCourses.filter(
      (course) => course.id !== courseId
    );

    setEnrolledCourses(updatedCourses);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedCourses)
    );
  };

  return (
    <div className="my-courses-container">
      <div className="my-courses-header">
        <h1>My Courses</h1>
        <p>
          Continue learning and track your enrolled courses.
        </p>
      </div>

      {enrolledCourses.length === 0 ? (
        <div className="empty-state">
          <h2>No Courses Enrolled Yet</h2>
          <p>
            Explore our courses and start learning today.
          </p>
        </div>
      ) : (
        <div className="my-courses-grid">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="my-course-card"
            >
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />

              <div className="course-content">
                <span className="category">
                  {course.category}
                </span>

                <h3>{course.title}</h3>

                <p>
                  Instructor: {course.instructor}
                </p>

                <div className="course-info">
                  <span>{course.duration}</span>
                  <span>
                    {course.lectures} Lectures
                  </span>
                </div>

                <div className="course-footer">
                  <span className="rating">
                    ⭐ {course.rating}
                  </span>

                  <span className="price">
                    {course.price}
                  </span>
                </div>

                <div className="button-group">
                  <button className="continue-btn">
                    Continue Learning
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeCourse(course.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;