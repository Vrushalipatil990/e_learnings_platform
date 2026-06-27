import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>SkillDo</h2>

      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>

        <li>
          <Link to="/students">Students</Link>
        </li>

        <li>
          <Link to="/enrollments">Enrollments</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;