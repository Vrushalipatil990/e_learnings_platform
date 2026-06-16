import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({
  id,
  image,
  instructor,
  category,
  title,
  duration,
  lectures,
  price,
  rating,
}) => {
  const navigate = useNavigate();
  return (
    <div
  className="course-card"
  onClick={() => navigate(`/course/${id}`)}
>

      <img
        src={image}
        alt={title}
        className="course-image"
      />

      <div className="course-content">

        <div className="course-info">
          <span>{instructor}</span>
          <span className="category-tag">{category}</span>
        </div>

        <h3>{title}</h3>

        <div className="course-details">
          <span>{duration}</span>
          <span>{lectures} Lectures</span>
        </div>

        <div className="course-footer">
          <span className="price">{price}</span>
          <span>⭐ {rating}</span>
        </div>

      </div>

    </div>
  );
};

export default CourseCard;