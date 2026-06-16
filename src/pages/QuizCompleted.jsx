import React from "react";
import "./QuizCompleted.css";
import { useNavigate } from "react-router-dom";

const QuizCompleted = () => {
  const navigate = useNavigate();

  const result =
    JSON.parse(localStorage.getItem("quizResult")) || {
      score: 0,
      totalQuestions: 0,
      percentage: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    };

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
            <h2>
              {result.score} / {result.totalQuestions}
            </h2>
          </div>

          <div className="score-box">
            <h3>Percentage</h3>
            <h2>{result.percentage}%</h2>
          </div>

          <div className="score-box">
            <h3>Correct Answers</h3>
            <h2 className="green">
              {result.correctAnswers}
            </h2>
          </div>

          <div className="score-box">
            <h3>Wrong Answers</h3>
            <h2 className="red">
              {result.wrongAnswers}
            </h2>
          </div>

        </div>

        <div className="success-msg">
          ✓ Keep practicing and improve your skills!
        </div>

        <div className="completed-buttons">

          <button
            className="review-btn"
            onClick={() =>
              navigate("/review-answers")
            }
          >
            Review Answers
          </button>

          <button
            className="back-btn"
            onClick={() =>
              navigate("/quiz")
            }
          >
            Back to Quizzes
          </button>

        </div>

      </div>
    </div>
  );
};

export default QuizCompleted;