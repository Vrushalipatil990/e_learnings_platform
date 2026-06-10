import React from 'react';
import 'remixicon/fonts/remixicon.css';
import './QuizQuestions.css';

const QuizQuestions = () => {
  return (
    <>
      {/* Navbar */}
      <nav className='question-page'>
        <div className='left'>
          <i className="ri-arrow-left-line"></i>
          <h3>React Basics Quiz</h3>
        </div>

        <div className='right'>
          <h3>9:30 Timer</h3>
          <button className='pause-btn'>Pause</button>
        </div>
      </nav>

      {/* Question Section */}
      <div className="quiz-container">

        <h4>Question 4 of 10</h4>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="question-card">

          <h2>What is React?</h2>

          <div className="option">
            <input type="radio" name="question" />
            <label>A JavaScript Library for building user interfaces</label>
          </div>

          <div className="option">
            <input type="radio" name="question" />
            <label>A programming language</label>
          </div>

          <div className="option">
            <input type="radio" name="question" />
            <label>A database system</label>
          </div>

          <div className="option">
            <input type="radio" name="question" />
            <label>A CSS framework</label>
          </div>

        </div>

        <div className="quiz-buttons">
          <button className="prev-btn">Previous</button>
          <button className="next-btn">Next</button>
        </div>

        <button className="submit-btn">
          Submit Quiz
        </button>

      </div>
    </>
  );
};

export default QuizQuestions;