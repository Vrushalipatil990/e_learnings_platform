import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaExpeditedssl } from "react-icons/fa";

import AdminLayout from "../layouts/AdminLayout";
import { useEffect, useState } from "react";
import { getAllCourses ,deleteCourse} from "../services/courseService";

import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate =useNavigate();
  
  useEffect(() => {

    fetchCourses();

}, []);

const fetchCourses = async () => {

    try {

        const response = await getAllCourses();

        setCourses(response.data);

    } catch (error) {

        console.log(error);

    }

};
const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {

        const response = await deleteCourse(id);

        alert(response.message);

        fetchCourses();

    } catch (error) {

        alert(
            error.response?.data?.message ||
            "Failed to delete course"
        );

    }

};
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

{courses.map((course) => (

<tr key={course._id}>

<td>
<img
    src={course.image}
    width="80"
/>
</td>

<td>{course.title}</td>

<td>{course.category}</td>

<td>{course.price}</td>

<td>
<button
    onClick={() => navigate(`/edit-course/${course._id}`)}
>
   <FaEdit/>
</button>

<button onClick={()=>handleDelete(course._id)}> <MdDelete/> </button>

</td>

</tr>

))}

</tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Courses;