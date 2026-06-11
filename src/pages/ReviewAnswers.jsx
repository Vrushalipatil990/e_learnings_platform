import React from "react";
import "./ReviewAnswers.css";
import { useNavigate } from "react-router-dom";

const ReviewAnswers = () => {
   
  const reviewData = [
    {
      question: "What is React?",
      userAnswer: "A JavaScript Library for building user interfaces",
      correctAnswer: "A JavaScript Library for building user interfaces",
      isCorrect: true
    },
    {
      question: "Who developed React?",
      userAnswer: "Google",
      correctAnswer: "Facebook",
      isCorrect: false
    },
    {
      question: "What is JSX?",
      userAnswer: "JavaScript XML",
      correctAnswer: "JavaScript XML",
      isCorrect: true
    }
  ];
  const navigate = useNavigate();

  return (
    <div className="review-container">

      <div className="review-header">
        <h1>Review Answers</h1>
        <p>Check your responses and learn from mistakes.</p>
      </div>

      {reviewData.map((item, index) => (
        <div className="review-card" key={index}>

          <h3>
            Question {index + 1}
          </h3>

          <div className="question-header">
            <h2>{item.question}</h2>

             <span
              className={
                   item.isCorrect
                  ? "status-badge correct"
                 : "status-badge incorrect"
                }
             >
              {item.isCorrect ? "Correct" : "Incorrect"}
             </span>
              </div>

          <div className="answer-section">

            <div
              className={`answer-box ${
                item.isCorrect ? "correct" : "wrong"
              }`}
            >
              <strong>Your Answer:</strong>
              <p>{item.userAnswer}</p>
            </div>

            <div className="answer-box correct-answer">
              <strong>Correct Answer:</strong>
              <p>{item.correctAnswer}</p>
            </div>

          </div>

        </div>
      ))}

      <div className="review-buttons">
        <button className="dashboard-btn" onClick={()=> navigate("/leaderboard")}>
          Back To Dashboard
        </button>

       <button
         className="quiz-btn" onClick={() => navigate("/quize")}
       >
  Back To Quizzes
</button>
      </div>

    </div>
  );
};

export default ReviewAnswers;