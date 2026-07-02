import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import EditCourse from "./pages/EditCourse";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import AddCourse from "./pages/AddCourse";
import ManageLessons from "./pages/ManageLessons";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/edit-course/:id" element={<EditCourse />} />
      <Route path="/manage-lessons/:courseId" element={<ManageLessons />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;