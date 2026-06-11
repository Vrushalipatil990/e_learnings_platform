import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Blogs from "./pages/blogs";
import Quize from "./pages/Quiz";
import QuizQuestions from "./pages/QuizQuestions";
import QuizCompleted from "./pages/QuizCompleted";
import ReviewAnswers from "./pages/ReviewAnswers";
import Leaderboard from "./pages/Leaderboard";

import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";


const App = () => {
  const current_theme =
    localStorage.getItem("current_theme") || "light";

  const [theme, setTheme] = useState(current_theme);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (

    <BrowserRouter>
      <div className={`container ${theme}`}>
        <NavBar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/quize" element={<Quize />} />
          <Route path="/quizquestions" element={<QuizQuestions />} />
          <Route path="/quiz-completed" element={<QuizCompleted />} /> 
          <Route path="/review-answers" element={<ReviewAnswers/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>

          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
         <Footer theme={theme} />
    </BrowserRouter>
   
  );
};


export default App;