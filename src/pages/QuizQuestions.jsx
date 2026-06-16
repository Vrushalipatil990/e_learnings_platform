import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./QuizQuestions.css";
import { useNavigate } from "react-router-dom";

const QuizQuestions = () => {
  const navigate = useNavigate();

  const questions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript Library for building user interfaces",
      "A programming language",
      "A database system",
      "A CSS framework"
    ],
    answer:
      "A JavaScript Library for building user interfaces"
  },

  {
    question: "What is JSX?",
    options: [
      "JavaScript XML",
      "Java Database",
      "Java Source Extension",
      "JSON XML"
    ],
    answer: "JavaScript XML"
  },

  {
    question: "Which hook is used for state management?",
    options: [
      "useEffect",
      "useNavigate",
      "useState",
      "useRef"
    ],
    answer: "useState"
  },

  {
    question: "Who developed React?",
    options: [
      "Google",
      "Facebook",
      "Microsoft",
      "Amazon"
    ],
    answer: "Facebook"
  },

  {
    question: "Which company owns React?",
    options: [
      "Apple",
      "Facebook",
      "Netflix",
      "Adobe"
    ],
    answer: "Facebook"
  }
];
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
        
  
  const progress =
  ((currentQuestion + 1) / questions.length) * 100;

  const handleOptionChange = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
  let score = 0;

  questions.forEach((question, index) => {
    if (selectedAnswers[index] === question.answer) {
      score++;
    }
  });

  const result = {
    score,
    totalQuestions: questions.length,
    percentage: Math.round((score / questions.length) * 100),
    correctAnswers: score,
    wrongAnswers: questions.length - score,
  };

  localStorage.setItem(
    "quizResult",
    JSON.stringify(result)
  );

  localStorage.setItem(
    "quizQuestions",
    JSON.stringify(questions)
  );

  localStorage.setItem(
    "selectedAnswers",
    JSON.stringify(selectedAnswers)
  );

  navigate("/quiz-completed");
};
  return (
    <>
      {/* Navbar */}
      <nav className="question-page">
        <div className="left">
          <i className="ri-arrow-left-line"></i>
          <h3>React Basics Quiz</h3>
        </div>

        <div className="right">
          <h3>9:30 Timer</h3>
          <button className="pause-btn">
            Pause
          </button>
        </div>
      </nav>

      {/* Quiz Section */}
      <div className="quiz-container">

        <h4>
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </h4>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="question-card">

          <h2>
            {
              questions[currentQuestion]
                .question
            }
          </h2>

          {questions[
            currentQuestion
          ].options.map(
            (option, index) => (
              <div
                className="option"
                key={index}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  checked={
                    selectedAnswers[
                      currentQuestion
                    ] === option
                  }
                  onChange={() =>
                    handleOptionChange(
                      option
                    )
                  }
                />

                <label>{option}</label>
              </div>
            )
          )}

        </div>

        <div className="quiz-buttons">

          <button
            className="prev-btn"
            onClick={handlePrevious}
            disabled={
              currentQuestion === 0
            }
          >
            Previous
          </button>

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={
              currentQuestion ===
              questions.length - 1
            }
          >
            Next
          </button>

        </div>

        {currentQuestion ===
          questions.length - 1 && (
          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        )}

      </div>
    </>
  );
};

export default QuizQuestions;