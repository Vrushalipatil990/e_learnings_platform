import "./EnrolledCourseCard.css";

function EnrolledCourseCard({
  title,
  progress,
  completedLessons,
  totalLessons
}) {
  return (
    <div className="enrolled-card">
      <h3>{title}</h3>

      <div className="progress-header">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="lesson-info">
        {completedLessons} / {totalLessons} Lessons Completed
      </p>

      <button className="continue-btn">
        Continue Learning →
      </button>
    </div>
  );
}

export default EnrolledCourseCard;