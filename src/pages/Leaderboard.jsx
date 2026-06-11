import React from "react";
import "./Leaderboard.css";

const Leaderboard = () => {

  const leaderboardData = [
    {
      rank: 1,
      name: "Priya Sharma",
      quizzes: 12,
      score: "95%"
    },
    {
      rank: 2,
      name: "Rahul Verma",
      quizzes: 10,
      score: "90%"
    },
    {
      rank: 3,
      name: "Amit Kumar",
      quizzes: 11,
      score: "88%"
    },
    {
      rank: 4,
      name: "Sneha Patil",
      quizzes: 9,
      score: "85%"
    },
    {
      rank: 5,
      name: "Vikram Singh",
      quizzes: 8,
      score: "82%"
    }
  ];

  return (
    <div className="leaderboard-container">

      <div className="leaderboard-header">
        <h1>🏆 Leaderboard</h1>

        <select>
          <option>All Categories</option>
          <option>UI/UX</option>
          <option>Development</option>
          <option>Business</option>
          <option>Finance</option>
        </select>
      </div>

      <div className="leaderboard-content">

        <div className="leaderboard-table">

          <div className="table-header">
            <span>Rank</span>
            <span>Name</span>
            <span>Quizzes</span>
            <span>Score</span>
          </div>

          {leaderboardData.map((user) => (
            <div className="table-row" key={user.rank}>
              <span>{user.rank}</span>
              <span>{user.name}</span>
              <span>{user.quizzes}</span>
              <span>{user.score}</span>
            </div>
          ))}

        </div>

        <div className="leaderboard-card">

          <div className="trophy-icon">
            🏆
          </div>

          <h3>Keep Learning</h3>

          <p>
            Keep practicing and become the champion.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Leaderboard;