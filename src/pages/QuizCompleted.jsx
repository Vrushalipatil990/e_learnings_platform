import React from "react";
import "./QuizCompleted.css";
import { Navigate, useNavigate } from "react-router-dom";

const QuizCompleted = () => {
    const navigate= useNavigate();
  return (
    <div className="completed-container">

      <div className="completed-card">

        <div className="trophy-icon">
          🏆
        </div>

        <h1>Quiz Completed!</h1>

        <p>
          Great Job! You've successfully completed the quiz.
        </p>

        <div className="score-grid">

          <div className="score-box">
            <h3>Your Score</h3>
            <h2>8 / 10</h2>
          </div>

          <div className="score-box">
            <h3>Percentage</h3>
            <h2>80%</h2>
          </div>

          <div className="score-box">
            <h3>Correct Answers</h3>
            <h2 className="green">8</h2>
          </div>

          <div className="score-box">
            <h3>Wrong Answers</h3>
            <h2 className="red">2</h2>
          </div>

        </div>

        <div className="success-msg">
          ✓ Keep practicing and improve your skills!
        </div>

        <div className="completed-buttons">

          <button className="review-btn"
          onClick={()=> navigate ("/review-answers")
          }>
            Review Answers
          </button>

          <button className="back-btn">
            Back to Quizzes
          </button>

        </div>

      </div>

    </div>
  );
};

export default QuizCompleted;