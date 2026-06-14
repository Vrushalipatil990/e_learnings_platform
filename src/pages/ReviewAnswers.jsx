import React from "react";
import "./ReviewAnswers.css";
import { useNavigate } from "react-router-dom";

const ReviewAnswers = () => {
  const navigate = useNavigate();

  const questions =
    JSON.parse(localStorage.getItem("quizQuestions")) || [];

  const selectedAnswers =
    JSON.parse(localStorage.getItem("selectedAnswers")) || {};

  return (
    <div className="review-container">

      <div className="review-header">
        <h1>Review Answers</h1>
        <p>Check your responses and learn from mistakes.</p>
      </div>

      {questions.map((item, index) => {
        const userAnswer = selectedAnswers[index];
        const correctAnswer = item.answer;

        const isCorrect = userAnswer === correctAnswer;

        return (
          <div className="review-card" key={index}>

            <h3>Question {index + 1}</h3>

            <div className="question-header">
              <h2>{item.question}</h2>

              <span
                className={
                  isCorrect
                    ? "status-badge correct"
                    : "status-badge incorrect"
                }
              >
                {isCorrect ? "Correct" : "Incorrect"}
              </span>
            </div>

            <div className="answer-section">

              <div
                className={`answer-box ${
                  isCorrect ? "correct" : "wrong"
                }`}
              >
                <strong>Your Answer:</strong>
                <p>{userAnswer || "Not Answered"}</p>
              </div>

              <div className="answer-box correct-answer">
                <strong>Correct Answer:</strong>
                <p>{correctAnswer}</p>
              </div>

            </div>

          </div>
        );
      })}

      <div className="review-buttons">

        <button
          className="dashboard-btn"
          onClick={() => navigate("/leaderboard")}
        >
          Back To Dashboard
        </button>

        <button
          className="quiz-btn"
          onClick={() => navigate("/quize")}
        >
          Back To Quizzes
        </button>

      </div>

    </div>
  );
};

export default ReviewAnswers;