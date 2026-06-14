import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setEnrolledCount(enrolledCourses.length);

    const completedCourses =
      JSON.parse(localStorage.getItem("completedCourses")) || [];

    setCompletedCount(completedCourses.length);
  }, []);

  const progress =
    enrolledCount === 0
      ? 0
      : Math.round(
          (completedCount / enrolledCount) * 100
        );

  return (
    <section className="dashboard-section">
      <h2>My Learning Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>📚</h3>
          <h4>{enrolledCount}</h4>
          <p>Enrolled Courses</p>
        </div>

        <div className="dashboard-card">
          <h3>✅</h3>
          <h4>{completedCount}</h4>
          <p>Completed Courses</p>
        </div>

        <div className="dashboard-card">
          <h3>📈</h3>
          <h4>{progress}%</h4>
          <p>Progress</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;