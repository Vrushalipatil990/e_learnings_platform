import React from "react";
import "./Quiz.css";
import { FaCode } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Quize=()=>{
  const navigate = useNavigate();
    const quizCategories = [
  {
    name: "UI/UX",
    quizzes: 20,
    questions: 190,
    color: "#7C4DFF",
    icon: "✖"
  },
  {
    name: "Development",
    quizzes: 25,
    questions: 150,
    color: "#22C55E",
    icon: "</>"
  },
  {
    name: "Data Science",
    quizzes: 10,
    questions: 110,
    color: "#3B82F6",
    icon: "📊"
  },
  {
    name: "Business",
    quizzes: 15,
    questions: 90,
    color: "#FB923C",
    icon: "💼"
  },
  {
    name: "Finance",
    quizzes: 15,
    questions: 95,
    color: "#FACC15",
    icon: "$"
  }
];
  return (
    
  <div className="quize-container">

    <h1 className="quize-title">Quizzes</h1>

    <p className="quize-subtitle">
      Test your knowledge and track your progress
    </p>

    <div className="quiz-grid">

      {quizCategories.map((item, index) => (
        <div className="quiz-card" key={index}>

          <div
            className="quiz-icon"
            style={{ backgroundColor: item.color }}
          >
            {item.icon}
          </div>

          <h3>{item.name}</h3>

          <p>{item.quizzes} Quizzes</p>

          <p>{item.questions} Questions</p>

          <button 
            className="quiz-btn"
            style={{ backgroundColor: item.color }}
            onClick={() => navigate("/quizquestions")}
          >
            Start Quiz
          </button>

        </div>
      ))}

    </div>

  </div>
);
};

export default Quize;