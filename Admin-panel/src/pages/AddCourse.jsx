import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import CourseForm from "../components/CourseForm";
import { createCourse } from "../services/courseService";

function AddCourse() {

    const [courseData, setCourseData] = useState({
        image: "",
        instructor: "",
        category: "",
        title: "",
        description: "",
        duration: "",
        lectures: "",
        price: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await createCourse(courseData);

            alert(response.message);

            setCourseData({
                image: "",
                instructor: "",
                category: "",
                title: "",
                description: "",
                duration: "",
                lectures: "",
                price: ""
            });

        } catch (error) {

            alert(error.response?.data?.message || "Failed to create course");

        }

    };

    return (

        <AdminLayout>

            <h1>Add New Course</h1>

            <CourseForm
                courseData={courseData}
                setCourseData={setCourseData}
                handleSubmit={handleSubmit}
                buttonText="Create Course"
            />

        </AdminLayout>

    );

}

export default AddCourse;