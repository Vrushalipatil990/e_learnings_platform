import AdminLayout from "../layouts/AdminLayout";
import "./AddCourse.css";

function AddCourse() {
  return (
    <AdminLayout>

      <h1>Add New Course</h1>

      <form className="course-form">

        <label>Course Title</label>
        <input type="text" placeholder="React JS Bootcamp" />

        <label>Description</label>
        <textarea placeholder="Write course description..." />

        <label>Category</label>
        <select>
          <option>Web Development</option>
          <option>Programming</option>
          <option>AI / ML</option>
          <option>Cloud Computing</option>
        </select>

        <label>Price</label>
        <input type="number" placeholder="499" />

        <label>Thumbnail</label>
        <input type="file" />

        <label>Instructor</label>
        <input type="text" placeholder="John Doe" />

        <button type="submit">
          Create Course
        </button>

      </form>

    </AdminLayout>
  );
}

export default AddCourse;