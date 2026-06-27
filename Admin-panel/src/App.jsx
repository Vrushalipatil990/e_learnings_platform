import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import AddCourse from "./pages/AddCourse";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/add-course" element={<AddCourse />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;