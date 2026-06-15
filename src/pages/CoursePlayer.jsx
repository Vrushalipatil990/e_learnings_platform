import React, { useState } from "react";
import "./CoursePlayer.css";

const CoursePlayer = () => {
  const lessons = [
    "Introduction to React",
    "Components",
    "JSX",
    "State & Props",
    "React Hooks",
  ];

  const [currentLesson, setCurrentLesson] = useState(0);

  const progress = Math.round(
    ((currentLesson + 1) / lessons.length) * 100
  );

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  return (
    <div className="course-player">

      <div className="player-header">
        <h1>React JS Complete Bootcamp</h1>
        <p>Continue learning and track your progress</p>
      </div>

      <div className="progress-section">
        <div className="progress-info">
          <span>Course Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="player-layout">

        <div className="video-card">
          <div className="video-placeholder">
            📹 Video Player
          </div>

          <h2>{lessons[currentLesson]}</h2>

          <p>
            Learn React concepts with practical examples
            and projects.
          </p>

          <div className="player-buttons">
            <button
              onClick={prevLesson}
              disabled={currentLesson === 0}
            >
              Previous
            </button>

            <button
              onClick={nextLesson}
              disabled={currentLesson === lessons.length - 1}
            >
              Next Lesson
            </button>
          </div>

          {progress === 100 && (
            <div className="completion-box">
              <h3>🎉 Course Completed!</h3>
              <p>You have successfully completed this course.</p>

              <button className="certificate-btn">
                Download Certificate
              </button>
            </div>
          )}
        </div>

        <div className="sidebar">

          <h3>Course Content</h3>

          {lessons.map((lesson, index) => (
            <div
              key={index}
              className={`lesson-item ${
                currentLesson === index ? "active" : ""
              }`}
              onClick={() => setCurrentLesson(index)}
            >
              {index < currentLesson ? "✓" : index + 1}
              <span>{lesson}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default CoursePlayer;