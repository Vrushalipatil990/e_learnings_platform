import { useNavigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import "./Courses.css";

function Courses() {
  const navigate = useNavigate();
  return (
    <AdminLayout>
      <div className="courses-header">
        <h1>Courses</h1>

        <button
    className="add-course-btn"
    onClick={() => navigate("/add-course")}
>
    + Add Course
</button>
      </div>

      <div className="courses-table">
        <table>
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Course</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>🖼️</td>
              <td>React JS</td>
              <td>Web Development</td>
              <td>₹499</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <td>🖼️</td>
              <td>Java DSA</td>
              <td>Programming</td>
              <td>₹699</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Courses;